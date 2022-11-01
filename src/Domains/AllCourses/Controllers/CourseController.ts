import {
    cLeading,
    Color,
    cTopLeading,
    HStack,
    State,
    Text,
    UIController,
    UIMediaPlayer,
    UIScene,
    VStack,
} from '@tuval/forms';

import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';
import { RealmOceanBrokerClient } from '../../../Services/RealmOceanBrokerClient';
import { LextureView } from '../../../Views/LextureView';
import { UIRouteOutlet } from '@tuval/forms';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class CourseController extends UIController {

    @State()
    private play: boolean;


    @State()
    private course_id: string;

    @State()
    private course_name: string;

    @State()
    private selectedLecture: any;

    @State()
    private accItems: any[];

    @State()
    private items: any[];

    @State()
    private showingItems: any[];

    @State()
    private value: any;
    protected BindRouterParams({ course_id }) {
        this.course_id = course_id;
        this.play = true;

        RealmOceanBrokerClient.GetCourseById(course_id).then(course =>
            this.course_name = course.course_name
        )

        RealmOceanBrokerClient.GetCourseContentById(course_id).then(cources => {
            console.log(cources);
            this.accItems = cources;
        })

        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === 'visible') {
                this.play = true;
            } else {
                this.play = false;
            }
        });
    }

    private search(value: string) {
        this.showingItems = [...this.items.filter((item: any) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1)];
    }

    private selectedLectureChanged(lecture: any) {

        this.selectedLecture = lecture;
    }
    public LoadView() {
        return (
            UIScene(
                HStack({ alignment: cTopLeading })(
                    LeftSideMenuView('', 'All courses'),
                    VStack(
                        HStack(
                            Text(this.course_name)
                        )
                            .height(60)
                            .background(Color.black)
                            .foregroundColor(Color.white)
                            .fontWeight('700').fontSize(16)
                            .fontFamily('Aristo')
                            .border('1px solid #3e4143'),
                        HStack({ alignment: cTopLeading })(
                            HStack({ alignment: cTopLeading })(
                                UIMediaPlayer().maxHeight('calc(100% - 10rem)').url(this.selectedLecture?.lecture_video_link).playing(this.play).onProgress((value) => console.log(value))
                            )
                            ,
                            HStack(
                                LextureView(this.course_id, this.selectedLecture?.lecture_id, this.accItems, (lecture) => { this.selectedLectureChanged(lecture) })
                            ).width(500)
                        )
                    )
                )
            )
        )
    }
}