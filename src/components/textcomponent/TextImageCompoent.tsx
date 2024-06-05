
type props = {
    img: string
    alt: string
    // header: string
    // subHeader: string
    // ParaSection1?: string
    // ParaSection2?: string
    // ParaSection3?: string
}

import LongTextComponent from "./LongTextComponent";

const TextImageComponent = (props: props) => {
    return (
        <>
            <img className="img-section mb-s" src={props.img} alt={props.alt} />

            <LongTextComponent
                header='Elstolpar'
                ParaSection1='
                    Laddstolpar, även kända som laddstationer för elbilar, är avgörande för den växande elbilsmarknaden. Dessa stationer tillhandahåller den elektricitet som elbilar behöver för att ladda sina batterier, vilket gör dem till en central del av infrastrukturen för hållbar transport. Laddstolpar finns i olika typer och effektnivåer, från långsammare AC-laddare som passar bra för hemmabruk till snabbladdare som kan ladda en elbil till 80 % på under en halvtimme, idealiska för offentliga platser och motorvägar.
                    '
                ParaSection2='
                    Gör det enkelt och bekvämt för elbilsägare att ladda sina fordon, vilket främjar användningen av elbilar och bidrar till minskade utsläpp av växthusgaser. 
                    '
                headerSmall="Elbilar"
                ParaSection3='
                    Elbilar är fordon som drivs av elektricitet istället för traditionella fossila bränslen. De använder batterier för att lagra energi, vilket minskar utsläppen av växthusgaser och bidrar till en renare miljö. Elbilar är tystare och har lägre driftskostnader jämfört med bensin- och dieseldrivna fordon. Med den snabba utvecklingen av laddinfrastruktur och förbättrade batteriteknologier blir elbilar alltmer populära och utgör en viktig del av framtidens hållbara transporter.
                    '

            />
        </>
    )
}

export default TextImageComponent;