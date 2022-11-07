import React, { Component } from "react";
import { useState, useEffect, useRef } from "react";

function ViewBox() {
    const [clicked, setClicked] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const handleClick = (event) => {
            setClicked(true);
        };
        const element = ref.current;
        element.addEventListener("click", handleClick);
        return () => {
            element.removeEventListener("click", handleClick);
        };
    }, []);

    const handleClosing = () => {
        setClicked(false);
    };

    const pageClassName = `${!clicked ? "page" : "page clicked"}`;

    return (
        <div className={pageClassName} ref={ref}>
            <div className="title">This is a placeholder for title</div>
            <div className="body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident consequuntur similique excepturi dolorum dicta cumque
                sequi exercitationem, tempora dolore debitis quas asperiores
                reprehenderit repellendus? Suscipit odit vel nulla corporis
                nostrum aliquid amet, laborum modi iusto? Unde odio aut nobis
                placeat sapiente aperiam accusamus ad maiores molestiae
                voluptate neque quaerat veritatis omnis, vero laudantium
                inventore. Incidunt fugiat quo minima atque ut id commodi, nihil
                asperiores sit cumque ipsam in reiciendis quos neque esse
                perferendis, voluptate laboriosam? Magnam, quis aspernatur
                voluptatibus rerum nesciunt labore vel vitae pariatur sapiente
                sunt hic cumque, sed asperiores id totam, maxime perspiciatis
                consequuntur non. Nemo nulla beatae earum praesentium sed cum ex
                ipsum, suscipit pariatur numquam ipsam sapiente incidunt
                cupiditate maxime eaque tempore. Eligendi hic nisi est assumenda
                nemo tempora ea porro, aspernatur unde consequatur molestias
                sint enim incidunt ipsum, optio molestiae quaerat. Possimus
                similique minima voluptatem nam adipisci consequuntur blanditiis
                cupiditate explicabo quibusdam perferendis aliquid dolor
                maiores, molestias sequi, vel dolore omnis impedit eaque, sed
                quis dignissimos enim illum officia eum. Aperiam, fuga! Quam
                nobis, iste dicta hic minima quae repellendus nam architecto
                perspiciatis eaque? Maiores dolorem ipsum rem delectus quia
                aliquid maxime alias quos aut voluptas obcaecati labore magni
                doloremque illum enim quaerat, ad facilis. Facere, atque
                quibusdam sint nesciunt expedita fugiat consequuntur vero quis
                deleniti quam, at dolorum laboriosam. Adipisci quisquam
                explicabo ducimus exercitationem. Fuga tempore suscipit
                molestias optio totam nesciunt magni veritatis voluptate nulla,
                laudantium, itaque iusto. Ab veritatis facilis, at nostrum dicta
                quo molestiae iste cum enim impedit voluptates esse eius aut
                cupiditate! Mollitia numquam alias explicabo sequi blanditiis
                tenetur, veritatis accusantium, minima nisi provident earum! Eum
                quisquam consequuntur natus quis enim fuga ipsum explicabo,
                voluptatem non corrupti. Autem et ab sequi unde consequatur
                quaerat laboriosam, facilis maxime a facere, provident quis? At
                aperiam neque ratione soluta ipsa quaerat nisi fugiat harum
                aspernatur non, ad veniam fugit repellendus. Inventore quos iste
                provident dignissimos id laboriosam fuga, molestias minima quis
                sapiente delectus hic quasi sunt nobis qui culpa ut adipisci
                iure pariatur, sit magni quae nisi, nihil corporis. Temporibus
                corporis doloribus officiis distinctio expedita nisi iure
                architecto. Quam a optio ex officia quia rem sint inventore
                aliquam iure facilis officiis placeat harum adipisci soluta
                omnis culpa consectetur magni debitis modi, impedit eum
                quibusdam! Et fuga perferendis corporis, laboriosam veritatis a
                itaque cupiditate aliquam eveniet sint quae corrupti dolorum
                deserunt quas facilis, labore molestiae cum ipsam quibusdam
                voluptatum tempora excepturi odit repellat harum. Neque delectus
                molestiae exercitationem? Ut nobis at ipsum labore ad molestiae
                ducimus ipsam voluptatibus, quae veniam harum! Voluptatem illum
                consectetur quaerat assumenda! Maiores neque suscipit libero
                voluptatibus numquam. Aliquid adipisci reiciendis corrupti
                aspernatur, laborum deleniti quaerat! Modi quos aut doloremque
                corporis ratione fugiat dicta sint nulla repellendus
                necessitatibus quaerat ipsam, pariatur harum, voluptatibus
                rerum, qui ad quod odio sed sequi. Inventore ipsa dolor
                officiis, consequatur corrupti reprehenderit error molestias
                fuga. Fugit, aspernatur at! Fugiat voluptates rerum assumenda
                dicta earum consequuntur facere laudantium error, odit
                necessitatibus eum aut numquam sequi eaque quibusdam
                reprehenderit magnam veritatis! Animi ratione itaque non
                veritatis suscipit sint?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Fugit maiores nam voluptate similique impedit
                exercitationem, qui iste fugiat perferendis! Dolorem cumque
                adipisci animi fuga dolore ipsam culpa assumenda ut provident
                officia tempora accusamus repellendus autem facere sint rem
                eveniet modi, facilis veniam dicta aliquam! Veniam fuga officia
                hic quo perferendis. Quod tempora inventore doloribus nisi ea,
                unde quia accusantium, rem voluptatibus distinctio quaerat.
                Deleniti nihil autem dolore harum libero? Ea odio ex quae
                maiores eligendi explicabo, earum quidem, officia aliquam
                temporibus exercitationem, nemo similique iusto optio tempora!
                Labore consequatur quasi, aliquid minus aliquam inventore.
                Voluptate, laborum ipsa nulla officia impedit libero facere
                tenetur enim dolores qui blanditiis atque rem labore provident
                molestias minus placeat dolorem. Eligendi corporis qui commodi
                adipisci maxime. Reprehenderit nisi hic mollitia harum fuga,
                ipsum, laudantium voluptatem atque aspernatur officiis
                dignissimos soluta unde optio itaque consectetur a laboriosam
                doloremque velit? Minus eveniet iure consequatur corporis
                dolorem error delectus nostrum earum. Perspiciatis, itaque minus
                sed voluptatem ipsa ea est, ex, molestiae quam cumque doloribus
                fugiat dolorum laborum amet? Laboriosam placeat voluptatum
                magnam error et? Expedita totam excepturi, neque eligendi nemo
                reprehenderit quod quae quam rerum autem accusamus odit esse
                reiciendis nisi! Asperiores, eum a! Beatae debitis sunt
                inventore dolore quaerat dolores vel voluptatibus, magni
                doloribus iure quibusdam aliquid asperiores earum possimus ut
                non odio. Beatae, quas excepturi! Suscipit molestias incidunt id
                commodi corporis aliquam non optio quos ad doloremque fugit
                nihil repellendus, ducimus pariatur laborum labore! Porro,
                quaerat suscipit! Earum sunt nostrum vitae iusto repellat
                necessitatibus, aspernatur accusamus ipsam laboriosam minima
                consequatur neque! Nisi earum error, ut animi expedita maxime
                ea, beatae vero quos assumenda velit perspiciatis iure nobis
                quibusdam, inventore praesentium facere. Corrupti sunt vitae
                impedit repellendus, magnam ipsam, nesciunt quia quae magni
                quaerat libero aut quis expedita atque quos possimus itaque ab
                laboriosam id. Magnam aspernatur officiis labore saepe modi,
                nisi ipsam cum omnis dolorem fugiat cumque eum a soluta sapiente
                rerum, impedit iure incidunt quos dignissimos inventore natus
                reprehenderit. Perspiciatis ratione, neque blanditiis,
                laudantium hic quod earum aut soluta cum ullam, laboriosam totam
                dolorem dignissimos autem illum sunt. Ab, dicta dolorum. Quam
                aliquid inventore quod obcaecati nobis perferen dis esse ullam
                dolorem veniam in? Fugit non tempore quo saepe voluptate,
                ratione blanditiis tempora. Voluptatem suscipit sint ratione
                exercitationem quidem eaque deleniti magnam excepturi sapiente
                repudiandae doloribus vero corrupti fuga ex iste omnis,
                quibusdam nam veritatis debitis error ad in totam voluptatibus.
                Fuga facilis laborum error quidem quaerat, modi quod nesciunt
                quae, nemo deserunt ullam, magni minus earum sunt natus corrupti
                placeat illo ea. Officiis asperiores qui quod sapiente quaerat
                facere corporis neque distinctio tempore laudantium dolores,
                numquam hic iste et quo. Quas odit, voluptas animi laudantium
                sint quibusdam soluta dolore alias incidunt doloremque
                repudiandae blanditiis asperiores. Officiis veritatis quaerat ab
                eveniet consequuntur, aliquid numquam qui debitis quia expedita
                ullam sit accusamus labore similique ex neque officia omnis
                mollitia deleniti delectus corrupti sint. Provident iste veniam
                impedit hic, consequuntur, totam fugiat, sunt id nesciunt soluta
                quibusdam quos error ratione omnis. Modi temporibus autem
                aliquam totam facere fugit!
            </div>
            <button className="close-btn" onClick={handleClosing}></button>
        </div>
    );
}

export default ViewBox;
