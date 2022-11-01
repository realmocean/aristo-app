import { Convert } from '@tuval/core';
import { TApplication } from '@tuval/forms';
import { MainForm } from './MainForm';
import { RealmBrokerClient } from './Services/RealmBrokerClient';
import { Services } from './Services/Services';
import { SplashForm } from './SplashForm';

const manifest = require('./manifest');
declare var tuval$core;
declare var FontFace;


const a = require("./Resources/Fonts/Aristo-Regular.woff2");
const a1 = require("./Resources/Fonts/Aristo-Bold.woff2");
const f3 = Convert.ToBlobUrl(a, "font/woff2");
const f4 = Convert.ToBlobUrl(a1, "font/woff2");

const fonts = {};
fonts['Aristo'] = new FontFace('Aristo', `local('Aristo'), local('primeicons'),url('${f3}') format('woff2'), url('${f3}') format('truetype')`, { style: 'normal', weight: '400' });
fonts['Aristo_Bold'] = new FontFace('Aristo', `local('Aristo'), local('primeicons'),url('${f4}') format('woff2'), url('${f4}') format('truetype')`, { style: 'normal', weight: '700' });

function loadFonts(): void {
    for (var font in fonts) {
        if (fonts.hasOwnProperty(font)) {
            const junction_font = fonts[font];
            const resolve = (() => {
                const _font = font;
                return (loaded_face) => {
                    (document as any).fonts.add(loaded_face);
                }
            })();

            const reject = (() => {
                const _font = font;
                return (error) => {
                    console.log('Error on load ' + _font + ' : ' + error);

                }
            })();

            junction_font.load().then(resolve).catch(reject);
        }
    }
}


loadFonts();

function App(manifest: any) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        if (tuval$core['__APPS__'] == null) {
            tuval$core['__APPS__'] = {};
        }
        tuval$core['__APPS__'][manifest.application.name] = constructor;
    }
}

@App(manifest)
export class IconLibrary extends TApplication {
    
    private m_tbiLabel: any;
    public InitComponents() {

        debugger;

        //fileExprorer.Controls.Add(button);

        this.Icon = manifest.application.icon;
        const fileExprorer = new SplashForm();

        this.SetMainForm(fileExprorer);
        setTimeout(() => this.Start(), 100);

        const session_id = Services.StateService.GetSessionId();
        RealmBrokerClient.GetSessionInfo().then(sessionInfo => {
            if (sessionInfo.is_tenant_admin) {
                const fileExprorer = new MainForm();
                this.SetMainForm(fileExprorer);
                setTimeout(() => this.Start(), 100);
            } else {
                alert('Bu uygulamayı kullanmaya yetkiniz yoktur.');
                fileExprorer.Hide();
            }

        });
        //
    }
}