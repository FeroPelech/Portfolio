import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="2156287"
            title="The pack fits a full-frame DSLR camera, along with three to five lenses, and up to a 15 laptop. Customizable dividers and a FIELD PACK provide handy"
            price={11.96}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_G7hyzoSHA_XyjfZX6KILSSAhFhTSjRzOO6JZDuZDvXOwD7amfpx&usqp=CAE&s"
          />
          <Product
            id="3528954"
            title="Vinta - A Camera Backpack for the Modern Traveller which need have own property in safe no matther the weather, lets go Arsenal."
            price={21.46}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI4v77vJAvpM4WvV8-O-SHELxLX_3ZgbE0AWHy1hL2bm_1WBFI0rNF&usqp=CAE&s"
          />
        </div>

        <div className="home__row">
          <Product
            id="72468513"
            title="A microwave oven or simply microwave is an electric oven that heats and cooks food by exposing it to electromagnetic radiation in the microwave frequency range."
            price={49.99}
            rating={4}
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQdjnDDHQaSAxWl9yPJUy2XFjYPtci3Xckbm3yejTd5xtA6BPXPBkaDRw7EDZBgpXDV7ZyLeUPvrjEipgD1p2m3GLfxsKFAFLB63wUCtSoCrd_4zzn6qfd9xg"
          />

          <Product
            id="7268954"
            title="Create your own secret cinema that blends in seamlessly to your space. A TV that looks like a picture frame. TV when it's on. Art when it's off. A speaker that blends in beautifully with your home - designed to look just like a picture frame"
            price={409.99}
            rating={5}
            image="https://images.samsung.com/is/image/samsung/p6pim/uk/qe65s95datxxu/gallery/uk-oled-tv-qe65s95datxxu-qe--s--datxxu-thumb-541580252?$252_252_PNG$"
          />
          <Product
            id="3588954"
            title="Enjoy Apple Intelligence*, a 6.3-inch Super Retina XDR display, and the powerful A18 Pro chip with our top iPhone 16 Pro deals. Its sturdy titanium build features a 48MP Fusion camera, with 25x digital zoom and Camera Control Button, to ensure exceptional photos with every take."
            price={500.01}
            rating={5}
            image="https://media.secure-mobiles.com/product-images/apple-iphone-16-pro-128gb-desert-titanium.responsive-fx.bg-mobiles_tile_grey.webp"
          />
        </div>

        <div className="home__row">
          <Product
            id="9528054"
            title="The intelligent robot vacuum cleaner TESLA Laser AI200 scans your entire household. Use the app to create cleaning zones and virtual walls and designate places to clean more thoroughly or avoid."
            price={1500.01}
            rating={5}
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQCJbJse0znJ8ycdvQi8gciNwxA__weR0OE8C7sUs2i6vX2SCwQP_Y368sQZl6XUCevDGjgx9TugQn7905BNOzFXeQjRiXU4-keNkyeZBothw_sr4Xubq8a"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
