import {
    cLeading,
    cTopLeading,
    HStack, State,
    Text, UIController, UIMediaPlayer, UIScene,
    VStack
} from '@tuval/forms';

import { Color } from '@tuval/forms';
import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';
import { RealmOceanBrokerClient } from '../../../Services/RealmOceanBrokerClient';
import { LextureView } from '../../../Views/LextureView';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class DashboardController extends UIController {

    @State()
    private accItems: any[];

    @State()
    private items: any[];

    @State()
    private showingItems: any[];

    @State()
    private value: any;
    protected BindRouterParams() {
        RealmOceanBrokerClient.GetCourseContentById('dsfds').then(cources =>
            this.accItems = cources
        )
    }
    public InitController() {
        this.items = [
            {
                name: 'Mert',
                code: "2"
            },
            {
                name: 'Zans',
                code: "3"
            },
            {
                name: 'Test',
                code: "4"
            }
        ]

        this.showingItems = [
            {
                name: 'Mert',
                code: "2"
            },
            {
                name: 'Zans',
                code: "3"
            },
            {
                name: 'Test',
                code: "4"
            }
        ]

        /*  this.accItems = [
             {
                 title: 'Bölüm 1: Wellcome',
                 subTitles: [
                     {
                         title: '1. Süreç Tanımı'
                     },
                     {
                         title: '2. Süreç ve Yönetim Sistemleri İlişkisi'
                     },
                     {
                         title: '3. Süreç Özellikleri, Seviye ve Türleri'
                     }
                 ]
             },
             {
                 title: 'Bölüm 2:Installing Nodejs'
             },
             {
                 title: 'defdsfsdf'
             }
         ] */
    }

    private search(value: string) {
        this.showingItems = [...this.items.filter((item: any) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1)];
    }
    public LoadView() {
        return (
            UIScene(
                HStack({ alignment: cTopLeading })(
                    LeftSideMenuView('', 'Dashboard'),
                    VStack(
                        HStack({ alignment: cLeading })(
                            Text('Süreç Yönetimi')
                        )
                            .height(60)
                            .background(Color.black)
                            .foregroundColor(Color.white)
                            .fontWeight('700').fontSize(16)
                            .border('1px solid #3e4143'),
                        HStack({ alignment: cTopLeading })(
                            HStack(
                                UIMediaPlayer().height(500).url('http://tuvalframework.com/myapp/test.mp4').playing(true)
                            ),
                            HStack(
                                LextureView('',null,this.accItems, void 0)
                            ).width(500)
                        )
                    )
                )
            )
        )
    }
}