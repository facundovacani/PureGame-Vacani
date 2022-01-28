import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const getItem = (array) =>{
    const promesa = new Promise((resolve) => {
            setTimeout(()=>{
                resolve(array)
            } , 500)
        }
    )   
    return promesa
}

const ItemDetailContainer = () => {
    const listado = [{ id: 0 ,title : "Super-Mario-Bros", stock: 3, price: 20, consola: "Nintendo(NES)", pictureUrl: "https://www.retroplace.com/pics/gba/packshots/59288--super-mario-bros.png", images:["https://www.retroplace.com/pics/gba/packshots/59288--super-mario-bros.png","https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2018/07/super-mario-bros.jpg?itok=kZc6XHkt","https://cdn.xgn.es/upload/201806/trucos-de-super-mario-bros-de-nes-1528392769.jpg","https://www.segasaturno.com/portal/files/images/869/mairtrus_mario.png"], description:"Mario Bros es un videojuego de arcade desarrollado por Nintendo en el año 1983. Fue creado por Shigeru Miyamoto. Ha sido presentado como un minijuego en la serie de Super Mario Advance y otros juegos. Mario Bros. ha sido relanzado para Wii, Nintendo 3DS y Wii U en los servicios de Consola Virtual en Japón, Norteamérica, Europa y Australia. Fue la tercera aparición de Mario, y la primera que aparece con su nombre definitivo, ya que en Donkey Kong (1981) aparecía bajo el seudónimo de Jumpman (‘saltador’).", categoria: "Aventura"}, {id: 1 ,title : "Final-Fantasy", stock: 10, price: 19, consola: "Nintendo(NES)", pictureUrl: "https://www.sopitas.com/wp-content/uploads/2016/03/ff3.jpg", images:["https://www.sopitas.com/wp-content/uploads/2016/03/ff3.jpg","https://image.winudf.com/v2/image/Y29tLmZpbmFsLmZhbnRhc3kubmVzLmhpbnRzX3NjcmVlbl8wXzE1MjQ3NDkyOTdfMDI1/screen-0.jpg?fakeurl=1&type=.jpg","https://img.vidaopantalla.es/2020/01/final-fantasy-nes.jpg","https://4.bp.blogspot.com/-rMTe31_pCd8/XIiW-KEabyI/AAAAAAAACEQ/mHl7QfJPQOIxeCmq1CSPD7_myeKN0RTSwCPcBGAYYCw/s1600/Final-Fantasy-1-Nes.png"], description: "Final Fantasy es un videojuego de rol creado por Hironobu Sakaguchi, desarrollado y publicado en Japón por Square Co. en 1987; y publicado en Estados Unidos por Nintendo of America, Inc. en 1990. Es el primer juego de Square de la serie Final Fantasy. La historia comienza con cuatro jóvenes llamados los Guerreros de la Luz, quienes llevan consigo uno de los cuatro cristales elementales del mundo, los cuales han sido oscurecidos por los cuatro Monstruos Elementales. Juntos, viajarán para derrotar a estas malvadas fuerzas, restablecer la luz a los cristales y salvar su mundo.", categoria: "Rol"}, {id: 2 ,title : "Winning-Eleven-4", stock: 7, price: 15, consola: "Playstation", pictureUrl: "https://i.pinimg.com/originals/14/d8/74/14d874866458dd6a7f46742eed345fa3.jpg", images:["https://i.pinimg.com/originals/14/d8/74/14d874866458dd6a7f46742eed345fa3.jpg","https://www.retroplace.com/pics/ps/ingames/57776--world-soccer-jikkyou-winning-eleven-4.png","https://cdromance.com/wp-content/uploads/2020/05/ePSXe-2020-05-13-17-01-09-89.png","https://images.igdb.com/igdb/image/upload/t_screenshot_huge/sc8lbf.jpg"], description: "ISS Pro Evolution, conocido en Japón como Winning Eleven 4, es la tercera entrega de la saga de videojuegos deportivos ISS Pro (actual Pro Evolution Soccer), desarrollada por Konami Computer Entertainment Tokyo. Salió a la venta en febrero de 1991​ en exclusiva para PlayStation, y fue la primera entrega que incluyó la Liga Máster.", categoria: "Deporte"}, {id: 3 ,title : "Donkey-Kong", stock: 15 ,price: 17, consola: "Nintendo(NES)", pictureUrl: "https://www.retroplace.com/pics/gba/packshots/59252--donkey-kong.png", images:["https://www.retroplace.com/pics/gba/packshots/59252--donkey-kong.png","https://media.wired.com/photos/5926ae95cefba457b079acf4/master/w_2560%2Cc_limit/DonkeyKong_TA.jpg","https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_wii_u_7/H2x1_WiiUVC_DonkeyKong_image800w.jpg","https://www.gamerfocus.co/wp-content/uploads/2018/02/Donkey-Kong.jpg"], description:"Donkey Kong es un videojuego arcade creado por Nintendo en el año 1981. Es un primitivo juego del género plataformas que se centra en controlar al personaje sobre una serie de plataformas mientras evita obstáculos. La historia no es muy compleja, pero funcionó en aquella época. El juego consiste en que Mario (llamado 'Jumpman' entonces en este videojuego,) debe rescatar a una dama (Pauline) que había sido capturada por un enorme gorila llamado Donkey Kong. Estos dos personajes se volvieron de los más famosos de Nintendo.", categoria: "Aventura"},{id: 4 ,title : "Spiderman", stock: 8 , price: 12, consola: "Playstation", pictureUrl: "https://www.eliteguias.com/img/caratulas/_og_/playstation1/spider-man.jpg", images:["https://www.eliteguias.com/img/caratulas/_og_/playstation1/spider-man.jpg","https://www.cultture.com/pics/2020/09/10-cosas-que-nunca-supiste-del-juego-spiderman-de-neversoft-en-la-playstation-original-0.jpg","https://64.media.tumblr.com/252e80d6a43e6a8ddc6ac19877c882e2/tumblr_inline_ollghxveAw1r697oz_1280.jpg","https://theboar.org/wp-content/uploads/2021/05/yyeox8usesrf5jb9lgny.png"],description: "Spider-Man es un videojuego de yo contra el barrio basado en el personaje de Marvel Comics, Spider-Man. Fue desarrollado por Neversoft, usando el mismo motor de Tony Hawk's Pro Skater. Está libremente basado en las series de caricaturas de los 90s Spider-Man y Spider-Man Unlimited.", categoria: "Aventura"}, {id: 5 ,title : "The-Legend-of-Zelda", stock: 16, price: 20, consola: "Nintendo(NES)", pictureUrl: "https://www.retroplace.com/pics/gba/packshots/59300--the-legend-of-zelda.png", images:["https://www.retroplace.com/pics/gba/packshots/59300--the-legend-of-zelda.png","https://cdn.vox-cdn.com/thumbor/SRhDwS0dV41zu2-WEnxCZ-EjrUw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13247741/DpJgQJmU0AAyQFs.jpg","https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2016/02/569026-legend-zelda-analisis-retro.jpg?itok=Fk7QO9Ij","https://tierragamer.com/wp-content/uploads/2018/10/The_Legend_of_Zelda_NES.jpg"], description: "The Legend of Zelda es un videojuego japonés desarrollado y publicado por Nintendo en 1986, y diseñado por Shigeru Miyamoto y Takashi Tezuka para la consola Nintendo Entertainment System.7​ Situado en la tierra de fantasía de Hyrule, el argumento se centra en un joven llamado Link —el personaje jugador—, quien tiene por objetivo recolectar las ocho piezas de la Trifuerza de la Sabiduría para rescatar a la Princesa Zelda, quien está aprisionada en la Montaña de la Muerte en manos del malvado príncipe Ganon.", categoria: "Aventura"}];
    const [producto, setProducto] = useState([]);
    const {itemId} = useParams();
    
    useEffect(() => {
        setTimeout(()=>{

            getItem(listado).then(res =>{
                let productoArray = res.filter(items => items.id === parseInt(itemId));
                let productoFinal = productoArray;
                return setProducto(productoFinal)
            }).catch(err => console.log(err)) 

        } ,2000)
      
    } ,[itemId])
    return(
        <>
            { (producto.length > 0)? 
                <>
                    <section className='item-detail-container'>
                        {
                            producto.map(item => <ItemDetail item={item} />)   
                        }
                    </section>
                </>:
                <>
                    <h3 style={{fontSize:"30px", color:"var(--neon-celeste)", margin:"150px auto"}}> Cargando juego, por favor, espere... </h3>
                </>    
            }
        
        </>

    );
};

export default ItemDetailContainer;
