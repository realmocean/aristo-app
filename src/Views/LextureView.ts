import {
    VStack, UIAccordion, cTopTrailing, cLeading, HStack, Text, ForEach, cTopLeading, Icon, ScrollView, cVertical, TextAlignment, UIRouteLink, bindState,
    FHStack, FVStack, FastText
} from '@tuval/forms';


export const LextureView = (course_id: string, selectedLectureId: string, data: any[], selectedLectureChanged: Function) => {
    console.log('LextureView')
    return ScrollView({ axes: cVertical })(
        VStack({ alignment: cTopTrailing })(
            UIAccordion({
                header: item => (
                    FHStack({ alignment: cLeading })(
                        FVStack({ alignment: cLeading, spacing: 5 })(
                            Text('Section ' + item.section_no + ': ' + item.section_title).multilineTextAlignment(TextAlignment.leading),
                            FHStack({ alignment: cLeading, spacing: 5 })(
                                FastText('7/9'),
                                FastText('|'),
                                FastText('1 sa 45 dk'),
                            ).fontSize(12).fontWeight('400')
                        )
                    )
                        .padding('1rem').border('1px solid #dee2e6').background('#f8f9fa').cornerRadius(6)
                        .fontWeight('500').foregroundColor('#1c1d1f').lineHeight('1.2').fontSize('16px')

                ),
                content: item => (
                    VStack({ spacing: 5 })(
                        ...ForEach(item.lectures)((subTitle: any) =>
                            //UIRouteLink(`/app(aristo)/course/${course_id}/learn/lecture/${subTitle.lecture_id}`, { section_id: item.section_id })(
                            HStack({ alignment: cTopLeading, spacing: 10 })(
                                Icon('\\e835').size(24),
                                FVStack({ alignment: cLeading, spacing: 5 })(
                                    FastText(subTitle.lecture_no + '. ' + subTitle.lecture_title).multilineTextAlignment(TextAlignment.leading),
                                    FHStack({ alignment: cLeading, spacing: 5 })(
                                        Icon('\\e038').size(20),
                                        FastText('8 dak').fontSize(12).fontWeight('400'),
                                    )
                                )
                            )
                                .padding('0.5rem 1rem')
                                .background(selectedLectureId === subTitle.lecture_id ? '#d1d7dc' : '')
                                .cursor('pointer').onClick(() => { selectedLectureChanged(subTitle); })
                            // ).width('100%')
                        )
                    )
                )
            }).items(data)
        ).height()
    )
}

