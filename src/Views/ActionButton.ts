import { Color, UIButton, Text } from '@tuval/forms';


export const ActionButton = (text: string) => (
    UIButton(
        Text(text).whiteSpace('nowrap')
    )
        .cursor('pointer')
        .background({ default: '#1cb987', hover: '#1cb987' })
        .width(110)
        .minWidth('48px')
        .height(48)
        .padding('0px 1rem')
        .cornerRadius(3)
        .foregroundColor(Color.white)
        .fontWeight('600')
        .lineHeight('44px')
        .transition('all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s')
)