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

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class LectureController extends UIController {

    @State()
    private video_link: string;

    @State()
    private items: any[];

    @State()
    private showingItems: any[];

    @State()
    private value: any;
    protected BindRouterParams({ course_id, section_id, lecture_id }) {
        RealmOceanBrokerClient.GetLectureById(course_id, section_id, lecture_id).then(lecture =>
            this.video_link = lecture.lecture_video_link
        )
    }

    /*   private search(value: string) {
          this.showingItems = [...this.items.filter((item: any) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1)];
      } */

    public LoadView() {
        return (

            UIMediaPlayer().height(500).url(this.video_link).playing(true)


        )
    }
}