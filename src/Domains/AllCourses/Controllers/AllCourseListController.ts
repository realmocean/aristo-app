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
    ZStack
} from '@tuval/forms';

import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';
import { RealmOceanBrokerClient } from '../../../Services/RealmOceanBrokerClient';
import { LextureView } from '../../../Views/LextureView';
import { ForEach, UIRouteLink, Icon, cTop, TextAlignment, UIImage } from '@tuval/forms';
import { RealmBrokerClient } from '../../../Services/RealmBrokerClient';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class AllCourseListController extends UIController {


    @State()
    private courses: any[];

    @State()
    private showingItems: any[];

    @State()
    private value: any;
    protected BindRouterParams() {
        RealmBrokerClient.GetSessionInfo().then(session =>{
            RealmOceanBrokerClient.GetRealmCourses(session.realm_id).then(cources =>
                this.courses = cources
            )
        })

    }

    /*   private search(value: string) {
          this.showingItems = [...this.items.filter((item: any) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1)];
      } */
    public LoadView() {
        return (
            UIScene(
                HStack({ alignment: cTopLeading })(
                    LeftSideMenuView('', 'All courses'),
                    VStack({ alignment: cTop })(
                        HStack(
                            Text('Library - All courses').foregroundColor(Color.white).fontSize(16).fontFamily('Aristo').fontWeight('700')
                        ).height(50).background(Color.black),
                        HStack({ alignment: cTopLeading, spacing: 10 })(
                            ...ForEach(this.courses)(course =>
                                UIRouteLink(`/app(aristo)/course/${course.course_id}`)(
                                    VStack({ spacing: 10 })(
                                        HStack(
                                            ZStack(
                                                UIImage(course.preview_image).width(230).height(130),
                                                HStack(
                                                    Text('')
                                                )
                                                    .background(Color.black.opacity(0.4))
                                                    .opacity('var(--icon-opacity)'),
                                                // .transition('opacity 400ms linear,transform 400ms cubic-bezier(.2,0,.38,.9)'),
                                                HStack(
                                                    Icon('\\e038').size(50).foregroundColor('white')
                                                )
                                                    .opacity('var(--icon-opacity)')
                                                // .transition('opacity 400ms linear,transform 400ms cubic-bezier(.2,0,.38,.9)'),

                                            ).height(130)
                                        )
                                            .overflow('hidden').cornerRadius(5)
                                            .shadow('rgb(0 0 0 / 16%) 0px 1px 4px')
                                            //.border('solid 1px gray')
                                            .variable('--icon-opacity', { default: '0', hover: '1' }),
                                        VStack({ alignment: cLeading, spacing: 5 })(
                                            Text(course.course_name)
                                                .fontFamily('Aristo')
                                                .fontSize(16)
                                                .foregroundColor('#1c1d1f')
                                                .kerning('-.02rem')
                                                .lineHeight('1.4')
                                                .fontWeight('700').multilineTextAlignment(TextAlignment.leading),
                                            Text(course.course_vendor)
                                                .fontFamily('Aristo')
                                                .fontSize(14)
                                                .foregroundColor('#6a6f73')
                                                .lineHeight('1.4')
                                                .fontWeight('400').multilineTextAlignment(TextAlignment.leading),

                                        )
                                    ).height().width(230).marginTop('20px')
                                )
                            )
                        ).height().wrap('wrap').padding('1rem')
                    )
                )
            )
        )
    }
}