import { VStack, cTopLeading, Icon, IconLibrary, Text, ForEach, HStack, cLeading, bindState, Color, UIRouteLink, UIImage } from '@tuval/forms';
import { theme } from '../../Theme';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif';

const icon = 'data:image/svg+xml;base64,PHN2ZyBpZD0iYmFjMjg2OTAtMjRiYS00ZDlkLTkyYjAtYmFkOWNjOGRiZDkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImExN2FhMzU0LWU1NjctNDM1Ni1hNzE4LTdlNGUyMTk4OTk4ZiIgeDE9IjkiIHkxPSItNzIwNS42NiIgeDI9IjkiIHkyPSItNzIxOS40NCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAtMSwgMCwgLTcyMDYuNTUpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwLjEzIiBzdG9wLWNvbG9yPSIjNzczYWRjIiAvPjxzdG9wIG9mZnNldD0iMC4yMyIgc3RvcC1jb2xvcj0iIzgyNDllMiIgLz48c3RvcCBvZmZzZXQ9IjAuNDMiIHN0b3AtY29sb3I9IiM5NjY0ZWMiIC8+PHN0b3Agb2Zmc2V0PSIwLjYiIHN0b3AtY29sb3I9IiNhMjc0ZjIiIC8+PHN0b3Agb2Zmc2V0PSIwLjc0IiBzdG9wLWNvbG9yPSIjYTY3YWY0IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT5JY29uLW1hbmFnZS0zMjY8L3RpdGxlPjxnPjxwYXRoIGQ9Ik0xNC40NSw4LjhIMy42OHY0Ljg1aDBjMCwxLjI2LDIuNDEsMi4yOSw1LjQ0LDIuMjlzNS40NC0xLDUuNDQtMi4yOWgwWiIgZmlsbD0iIzc3M2FkYyIgLz48cGF0aCBkPSJNOC4zOSwyLjE2bC04LDQuMDlhLjcxLjcxLDAsMCwwLS4yNS45NC42Mi42MiwwLDAsMCwuMjUuMjhsOCwzLjQ4YS45My45MywwLDAsMCwuNzMsMGw4LjQ4LTMuNWEuNzIuNzIsMCwwLDAsLjI4LS45NC42My42MywwLDAsMC0uMjgtLjNMOS4xNCwyLjE0QS44Ni44NiwwLDAsMCw4LjM5LDIuMTZaIiBmaWxsPSJ1cmwoI2ExN2FhMzU0LWU1NjctNDM1Ni1hNzE4LTdlNGUyMTk4OTk4ZikiIC8+PHBhdGggZD0iTTE1Ljg0LDEwLjJoMGExLjI2LDEuMjYsMCwwLDAtLjIzLS41Miw1LjE5LDUuMTksMCwwLDAtMi41Mi0yLjIzTDkuNjEsNiw4LjUsNi43OSwxMiw4LjI4YTUuMDUsNS4wNSwwLDAsMSwyLjcyLDIuNjZBNy44OCw3Ljg4LDAsMCwxLDE1LDEyLjYybS4xNiwwLC40Mi0uODMuNTMuNjhoLjFhNSw1LDAsMCwwLS4zOC0yLjI3WiIgZmlsbD0iIzUwZTZmZiIgLz48ZWxsaXBzZSBjeD0iOC45NCIgY3k9IjYuNDYiIHJ4PSIxLjM0IiByeT0iMC42OCIgZmlsbD0iIzU1MmY5OSIgLz48L2c+PC9zdmc+';

const menuModel = [
  /*   {
        title: 'Insights',
        subItems: [
            {
                name: 'Dashboard',
                icon: IconLibrary.Dashboard1,
                link: '/app(aristo)/dashboard'

            }
        ]
    }, */
    {
        title: 'Library',
        subItems: [
            {
                name: 'All courses',
                icon: IconLibrary.Dashboard1,
                link: '/app(aristo)/library'

            }
        ]
    },
    {
        title: 'My Learning',
        subItems: [

            {
                name: 'My courses',
                icon: '\\e04a',
                link: '/app(aristo)/all-courses/list'
            },
            {
                name: 'My List',
                icon: '\\e8ef',
                link: '/app(aristo)/organization_unit/list'
            }
        ]
    },
    {
        title: 'Instructor',
        subItems: [
            {
                name: 'Courses',
                icon: '\\f06a',
                link: '/app(aristo)/my-courses'
            },
            {
                name: 'Communication',
                icon: '\\e8af',
                link: '/app(aristo)/organization_unit/list'
            },
            {
                name: 'Performance',
                icon: '\\e01d',
                link: '/app(aristo)/organization_unit/list'
            },
            {
                name: 'Tools',
                icon: '\\e869',
                link: '/app(aristo)/organization_unit/list'
            },
            {
                name: 'Resources',
                icon: '\\d200',
                link: '/app(aristo)/organization_unit/list'
            }
        ]
    },

]

export const LeftSideMenuView = (realmName: string, selectedItem: string) => (
    VStack({ alignment: cTopLeading })(
        HStack({ alignment: cLeading, spacing: 10 })(
            UIImage(icon).width(40),
            Text('Aristo')
            .fontFamily('Aristo')
                .foregroundColor(theme.surfaceground)
                .fontWeight('700')
                .fontSize(25)
        ).height().padding(),

        /*   HStack({ alignment: cTopLeading })(
              Icon((IconLibrary as any).DonutLarge).size(30).paddingLeft('15px'),
              Text(realmName).fontWeight('600')
                  .fontSize('0.8rem').lineHeight('0.8rem')
                  .kerning('.06rem').fontFamily(fontFamily)
                  .padding('25px 20px 15px')
                  .textTransform('uppercase'),
          ).height(), */
        ...ForEach(menuModel)(menu =>
            VStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    Text(menu.title)
                        .fontWeight('500')
                        .fontSize('0.8rem').lineHeight('0.8rem')
                        .foregroundColor(theme.gray600)
                        .kerning('.06rem')
                        .fontFamily(theme.fontFamily)
                        .padding('1rem')
                        .textTransform('uppercase')
                ).height(),
                ...ForEach((menu as any).subItems)((subItem: any) =>
                    UIRouteLink(subItem.link ?? '')(
                        HStack({ alignment: cLeading, spacing: 10 })(
                            subItem.icon ? Icon(subItem.icon).size(24) : null,
                            Text(subItem.name)
                                .fontFamily(fontFamily)
                                .fontSize(16)
                                .lineHeight('1rem')
                        )
                            .cornerRadius(theme.borderRadius)
                            .padding('1rem')
                            .foregroundColor(theme.surfaceground)
                            .background({ default: selectedItem === subItem.name ? theme.gray800 : '', hover: theme.gray800 })
                            .transition('all .2s ease-in-out')
                            .fontWeight('500')
                            // .fontWeight(selectedItem == subItem.name ? '700' : '400')
                            .cursor('pointer')
                    ).width('100%')

                )
            ).height()
                .borderBottom('1px solid rgba(180,188,199,.32)')
                .paddingBottom('20px')
        )
    ).width(220).minWidth('220px').maxWidth('220px')
        .background(Color.black)
        .fontSize(16)
        .foregroundColor(Color.white)
)