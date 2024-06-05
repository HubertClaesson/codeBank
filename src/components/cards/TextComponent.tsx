import LongTextComponent from "../textcomponent/LongTextComponent";

type TextComponentProps = {
    textComponentbackground: string
}

const TextComponent = (props: TextComponentProps) => {
    return (
        <>

            <section className={`flex-center border-radius ${props.textComponentbackground}`}>
                <article className=" p-2">
                    <LongTextComponent
                        header='Vår historia' ParaSection1='Lorem 
                        ipsum dolor sit amet consectetur adipisicing elit. 
                        Dolor pariatur vitae animi mollitia ducimus eius accusamus 
                        aperiam doloremque iste sint repellendus dolorem eaque, enim 
                        reprehenderit quod, possimus, laudantium dignissimos nulla.'
                        ParaSection2='     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor pariatur vitae animi mollitia ducimus eius accusamus aperiam doloremque iste sint repellendus dolorem eaque, enim reprehenderit quod, possimus, laudantium dignissimos nulla.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor pariatur vitae animi mollitia 
                        ducimus eius accusamus aperiam doloremque iste sint repellendus dolorem eaque, enim 
                        reprehenderit quod, possimus, laudantium dignissimos nulla.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor pariatur 
                        vitae animi mollitia ducimus eius accusamus aperiam doloremque iste sint 
                        repellendus dolorem eaque, enim reprehenderit quod, possimus, laudantium 
                        dignissimos nulla.     Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Dolor pariatur vitae animi mollitia ducimus eius accusamus aperiam 
                        doloremque iste sint repellendus dolorem eaque, enim reprehenderit quod, 
                        possimus, laudantium dignissimos nulla.'
                        headerSmall="Rubtik"
                        ParaSection3='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor pariatur vitae animi mollitia ducimus eius accusamus aperiam doloremque iste sint 
                        repellendus dolorem eaque, enim reprehenderit quod, possimus, laudantium dignissimos nulla.'
                    />
                </article>
            </section>
        </>
    )
}

export default TextComponent;