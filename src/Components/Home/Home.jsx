// import React, { useState, useEffect } from 'react';
// import './home.css';

// const cities = [
//   {
//     name: 'Samarkand',
//     description: 'A historical city in Uzbekistan.',
//     image: 'https://w0.peakpx.com/wallpaper/932/835/HD-wallpaper-samarkand-uzbekistan-ancient-city-evening-sunset-islamic-architecture-samarqand.jpg',
//     animation: 'fadeIn',
//     moreInfo: {
//       location: 'Uzbekistan',
//       cost: '$$$',
//       popularPlaces: ['Registan', 'Shah-i-Zinda'],
//       popularPlacesImages: [
//         'https://pohcdn.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Registan-Square.jpg',
//         'https://www.islamicarchitecturalheritage.com/wp-content/uploads/2020/06/shakh-i-zinda-complex.jpg',
//       ],
//       mapLink: 'https://maps.app.goo.gl/zTqiyumAMmrLCYfK7',
//     },
//   },
//   {
//     name: 'Tashkent',
//     description: 'The capital city of Uzbekistan.',
//     image: 'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/cf98ed59-8a0a-48f5-82d9-800b036744e2/-/resize/1400x/-/quality/lighter/',
//     animation: 'zoomIn',
//     moreInfo: {
//       location: 'Uzbekistan',
//       cost: '$$',
//       popularPlaces: ['Amir Timur Museum', 'Tashkent Tower'],
//       popularPlacesImages: [
//         'https://silkroaddestinations.com/wp-content/uploads/2017/02/%D0%91%D0%B5%D0%B7bez-imeni-1-860x424.jpg',
//         'https://people-travels.com/storage/images/sights/design/Tashkent_TV_Tower_1.webp',
//       ],
//       mapLink: 'https://maps.app.goo.gl/HmzRKdMkXD5PcJYTA',
//     },
//   },
//   {
//     name: 'Istanbul',
//     description: 'A major city in Turkey.',
//     image: 'https://i.pinimg.com/originals/c8/d3/08/c8d308538241246b0f06f5c9058f779a.jpg',
//     animation: 'slideInLeft',
//     moreInfo: {
//       location: 'Turkey',
//       cost: '$$$',
//       popularPlaces: ['Hagia Sophia', 'Blue Mosque'],
//       popularPlacesImages: [
//         'https://www.themarmarahotels.com/hs-fs/hubfs/Hagia%20Sophia%20Mosque.jpg?width=2000&height=1333&name=Hagia%20Sophia%20Mosque.jpg',
//         'https://www.acetestravel.com/tour-image/Blue-Mosque-5.webp',
//       ],
//       mapLink: 'https://maps.app.goo.gl/6FaH1nZUeaavqQWd6',
//     },
//   },
//   {
//     name: 'New York',
//     description: 'The largest city in the USA.',
//     image: 'https://swall.teahub.io/photos/small/2-20069_night-wallpaper-city.jpg',
//     animation: 'slideInRight',
//     moreInfo: {
//       location: 'USA',
//       cost: '$$$$',
//       popularPlaces: ['Statue of Liberty', 'Central Park'],
//       popularPlacesImages: [
//         'https://png.pngtree.com/background/20230616/original/pngtree-liberty-statue-of-america-picture-image_3643302.jpg',
//         'https://www.guidesulysse.com/imageswebp/destinations/iStock-157675185.webp',
//       ],
//       mapLink: 'https://maps.app.goo.gl/mzzxkaiB92JN31yy5',
//     },
//   },
//   {
//     name: 'Dubai',
//     description: 'A city in the UAE known for luxury shopping.',
//     image: 'https://free4kwallpapers.com/uploads/originals/2020/08/15/dubai-united-arab-emirates.-wallpaper_.jpg',
//     animation: 'slideInTop',
//     moreInfo: {
//       location: 'UAE',
//       cost: '$$$$',
//       popularPlaces: ['Burj Khalifa', 'Dubai Mall'],
//       popularPlacesImages: [
//         'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3a/67/54.jpg',
//         'https://www.arabianbusiness.com/cloud/2023/01/23/Dubai-mall.jpg',
//       ],
//       mapLink: 'https://maps.app.goo.gl/MSrHNa1Gjawn1B3o7',
//     },
//   },
//   {
//     name: 'Seoul',
//     description: 'The capital city of South Korea.',
//     image: 'https://media.istockphoto.com/id/1676101015/photo/gyeongbokgung-palace-in-sunset-is-beautiful-seoul-south-korea.webp?b=1&s=170667a&w=0&k=20&c=9fs60EJBQadf0oDx-6IW6KCG3xYkabsW1JvmlYWGqyM=',
//     animation: 'slideInBottom',
//     moreInfo: {
//       location: 'South Korea',
//       cost: '$$$',
//       popularPlaces: ['Gyeongbokgung Palace', 'N Seoul Tower'],
//       popularPlacesImages: [
//         'https://static1.thetravelimages.com/wordpress/wp-content/uploads/2023/08/gyeongbokgung-palace-gate-at-sunset.jpg',
//         'https://cf.creatrip.com/original/spot/11239/%E5%8D%97%E5%B1%B1%E5%A1%94_Creatrip00.jpg',
//       ],
//       mapLink: 'https://maps.app.goo.gl/2UozUFtQ83745epL6',
//     },
//   },
//   {
//     name: 'Tokyo',
//     description: 'The capital city of Japan.',
//     image: 'https://wallpapers.com/images/hd/tokyo-city-at-day-time-w25s1l81bmt1pdlz.jpg',
//     animation: 'fadeIn',
//     moreInfo: {
//       location: 'Japan',
//       cost: '$$$$',
//       popularPlaces: ['Tokyo Tower', 'Shinjuku Gyoen'],
//       popularPlacesImages: [
//         'https://byfood.b-cdn.net/api/public/assets/9392/content',
//         'https://miro.medium.com/v2/resize:fit:1400/1*GrcbJt7buSrVGf5qCme2yQ.jpeg',
//       ],
//       mapLink: 'https://maps.app.goo.gl/FUUdCMvc1nRTuVw96',
//     },
//   },
//   {
//     name: 'Madrid',
//     description: 'The capital city of Spain.',
//     image: 'https://free4kwallpapers.com/uploads/originals/2020/12/22/madrid-spain-wallpaper.jpg',
//     animation: 'zoomIn',
//     moreInfo: {
//       location: 'Spain',
//       cost: '$$',
//       popularPlaces: ['Prado Museum', 'Royal Palace'],
//       popularPlacesImages: [
//         'https://cdn.britannica.com/34/194834-131-8ECCF05C/Prado-Museum-Madrid.jpg?w=840&h=460&c=crop',
//         'https://cdn-imgix.headout.com/media/images/68d9aa77c4d16a910bb2a6cd0d7d6fb7-Royal%20Palace%20Of%20Madrid%202.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&ar=16%3A9&crop=faces',
//       ],
//       mapLink: 'https://maps.app.goo.gl/HjxxMzTQJWgsqSXL8',
//     },
//   },
//   {
//     name: 'Paris',
//     description: 'The capital city of France.',
//     image: 'https://res.cloudinary.com/gimmersta-wallpaper/image/upload/c_fill,f_auto,fl_progressive,q_auto,h_1200/v1638283230/articles/R10661_product.jpg',
//     animation: 'slideInLeft',
//     moreInfo: {
//       location: 'France',
//       cost: '$$$$',
//       popularPlaces: ['Eiffel Tower', 'Louvre Museum'],
//       popularPlacesImages: [
//         'https://static.toiimg.com/photo/107852790.cms',
//         'https://www.travelandleisure.com/thmb/ERDlxa-28z8DC3s0rAtwLVVzGNw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Louvre-Museum-Paris-France-SECRETS0415_1-ace6b2a941ee499ca01aa4feaf10f5fc.jpg',
//       ],
//       mapLink: 'https://maps.app.goo.gl/D8CsHvagP5nvws4k8',
//     },
//   },
// ];

// const Home = ({ setSelectedCity }) => {
//   const [currentCityIndex, setCurrentCityIndex] = useState(0);

//   const nextCity = () => {
//     setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
//   };

//   const prevCity = () => {
//     setCurrentCityIndex((prevIndex) => (prevIndex - 1 + cities.length) % cities.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextCity, 5000); // Change city every 5 seconds
//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, []);

//   const currentCity = cities[currentCityIndex];

//   return (
//     <section id="home" className="home-section">
//       <div className="background-blur" style={{ backgroundImage: `url(${currentCity.image})` }} />
//       <div className="city-card" style={{ '--current-animation': currentCity.animation }}>
//         <img src={currentCity.image} alt={currentCity.name} className="city-image" />
//         <div className="city-info">
//           <h3 className="city-name">
//             {currentCity.name.split('').map((char, index) => (
//               <span key={index} style={{ color: `hsl(${index * 40}, 100%, 50%)` }}>
//                 {char}
//               </span>
//             ))}
//           </h3>
//           <p className="city-description">{currentCity.description}</p>
//           <a href="#about">
//             <button className="about-more-button" onClick={() => setSelectedCity(currentCity)}>About More</button>
//           </a>
//         </div>
//         <button className="nav-button left" onClick={prevCity}>&lt;</button>
//         <button className="nav-button right" onClick={nextCity}>&gt;</button>
//       </div>
//     </section>
//   );
// }

// export default Home;

import React, { useState, useEffect } from 'react';
import './home.css';

const cities = [  // cities
  {
    name: 'Samarkand', // SAMARKAND
    description: 'A historical city in Uzbekistan.',
    image: 'https://i.pinimg.com/564x/03/59/0e/03590e658114e6b08048047c9235464f.jpg',
    animation: 'fadeIn',// animation
    moreInfo: {
      location: 'Uzbekistan',
      cost: '100$',
      popularPlaces: ['Registan', 'Shah-i-Zinda'],
      popularPlacesImages: [
        'https://pohcdn.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Registan-Square.jpg',
        'https://www.islamicarchitecturalheritage.com/wp-content/uploads/2020/06/shakh-i-zinda-complex.jpg',
      ],
      mapLink: 'https://maps.app.goo.gl/zTqiyumAMmrLCYfK7', //map
    },
  },
  {
    name: 'Tashkent',  //TASHKENT
    description: 'The capital city of Uzbekistan.',
    image: 'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/cf98ed59-8a0a-48f5-82d9-800b036744e2/-/resize/1400x/-/quality/lighter/',
    animation: 'zoomIn', //animation
    moreInfo: {
      location: 'Uzbekistan',
      cost: '200$',
      popularPlaces: ['Amir Timur Museum', 'Tashkent Tower'],
      popularPlacesImages: [
        'https://silkroaddestinations.com/wp-content/uploads/2017/02/%D0%91%D0%B5%D0%B7bez-imeni-1-860x424.jpg',
        'https://people-travels.com/storage/images/sights/design/Tashkent_TV_Tower_1.webp',
      ],
      mapLink: 'https://maps.app.goo.gl/HmzRKdMkXD5PcJYTA',//map
    },
  },
  {
    name: 'Istanbul',  //ISTANBUL
    description: 'A major city in Turkey.',
    image: 'https://i.pinimg.com/564x/ae/9a/2f/ae9a2fb7941c061e0d535b2a06565c9f.jpg',
    animation: 'slideInLeft', //animation
    moreInfo: {
      location: 'Turkey',
      cost: '$$$',
      popularPlaces: ['Hagia Sophia', 'Blue Mosque'],
      popularPlacesImages: [
        'https://www.themarmarahotels.com/hs-fs/hubfs/Hagia%20Sophia%20Mosque.jpg?width=2000&height=1333&name=Hagia%20Sophia%20Mosque.jpg',
        'https://www.acetestravel.com/tour-image/Blue-Mosque-5.webp',
      ],
      mapLink: 'https://maps.app.goo.gl/6FaH1nZUeaavqQWd6', // map
    },
  },
  {
    name: 'New York',  //New York
    description: 'The largest city in the USA.',
    image: 'https://i.pinimg.com/564x/47/50/9b/47509bd6d88c5ee857f24f825c6f6918.jpg',
    animation: 'slideInRight',
    moreInfo: {
      location: 'USA',
      cost: '$$$$',
      popularPlaces: ['Statue of Liberty', 'Central Park'],
      popularPlacesImages: [
        'https://png.pngtree.com/background/20230616/original/pngtree-liberty-statue-of-america-picture-image_3643302.jpg',
        'https://www.guidesulysse.com/imageswebp/destinations/iStock-157675185.webp',
      ],
      mapLink: 'https://maps.app.goo.gl/mzzxkaiB92JN31yy5',
    },
  },
  {
    name: 'Dubai',  //DUBAI
    description: 'A city in the UAE known for luxury shopping.',
    image: 'https://i.pinimg.com/564x/d8/b7/02/d8b7029ba2a476c28c517543d153696e.jpg',
    animation: 'slideInTop',
    moreInfo: {
      location: 'UAE',
      cost: '$$$$',
      popularPlaces: ['Burj Khalifa', 'Dubai Mall'],
      popularPlacesImages: [
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3a/67/54.jpg',
        'https://www.arabianbusiness.com/cloud/2023/01/23/Dubai-mall.jpg',
      ],
      mapLink: 'https://maps.app.goo.gl/MSrHNa1Gjawn1B3o7',
    },
  },
  {
    name: 'Seoul',  //SEOUL
    description: 'The capital city of South Korea.',
    image: 'https://i.pinimg.com/736x/f0/ad/ee/f0adee0d05fd48305d755366a1fd6cd0.jpg',
    animation: 'slideInBottom',
    moreInfo: {
      location: 'South Korea',
      cost: '$$$',
      popularPlaces: ['Gyeongbokgung Palace', 'N Seoul Tower'],
      popularPlacesImages: [
        'https://static1.thetravelimages.com/wordpress/wp-content/uploads/2023/08/gyeongbokgung-palace-gate-at-sunset.jpg',
        'https://cf.creatrip.com/original/spot/11239/%E5%8D%97%E5%B1%B1%E5%A1%94_Creatrip00.jpg',
      ],
      mapLink: 'https://maps.app.goo.gl/2UozUFtQ83745epL6',
    },
  },
  {
    name: 'Tokyo',  //TOKYO
    description: 'The capital city of Japan.',
    image: 'https://wallpapers.com/images/hd/tokyo-city-at-day-time-w25s1l81bmt1pdlz.jpg',
    animation: 'fadeIn',
    moreInfo: {
      location: 'Japan',
      cost: '$$$$',
      popularPlaces: ['Tokyo Tower', 'Shinjuku Gyoen'],
      popularPlacesImages: [
        'https://byfood.b-cdn.net/api/public/assets/9392/content',
        'https://miro.medium.com/v2/resize:fit:1400/1*GrcbJt7buSrVGf5qCme2yQ.jpeg',
      ],
      mapLink: 'https://maps.app.goo.gl/FUUdCMvc1nRTuVw96',
    },
  },
  {
    name: 'Madrid',  //MADRID
    description: 'The capital city of Spain.',
    image: 'https://free4kwallpapers.com/uploads/originals/2020/12/22/madrid-spain-wallpaper.jpg',
    animation: 'zoomIn',
    moreInfo: {
      location: 'Spain',
      cost: '$$',
      popularPlaces: ['Prado Museum', 'Royal Palace'],
      popularPlacesImages: [
        'https://cdn.britannica.com/34/194834-131-8ECCF05C/Prado-Museum-Madrid.jpg?w=840&h=460&c=crop',
        'https://cdn-imgix.headout.com/media/images/68d9aa77c4d16a910bb2a6cd0d7d6fb7-Royal%20Palace%20Of%20Madrid%202.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&ar=16%3A9&crop=faces',
      ],
      mapLink: 'https://maps.app.goo.gl/HjxxMzTQJWgsqSXL8',
    },
  },
  {
    name: 'Paris',  //PARIS
    description: 'The capital city of France.',
    image: 'https://res.cloudinary.com/gimmersta-wallpaper/image/upload/c_fill,f_auto,fl_progressive,q_auto,h_1200/v1638283230/articles/R10661_product.jpg',
    animation: 'slideInLeft',
    moreInfo: {
      location: 'France',
      cost: '$$$$',
      popularPlaces: ['Eiffel Tower', 'Louvre Museum'],
      popularPlacesImages: [
        'https://static.toiimg.com/photo/107852790.cms',
        'https://www.travelandleisure.com/thmb/ERDlxa-28z8DC3s0rAtwLVVzGNw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Louvre-Museum-Paris-France-SECRETS0415_1-ace6b2a941ee499ca01aa4feaf10f5fc.jpg',
      ],
      mapLink: 'https://maps.app.goo.gl/D8CsHvagP5nvws4k8',
    },
  },
];

const Home = ({ setSelectedCity }) => {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  const nextCity = () => {
    setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
  };

  const prevCity = () => {
    setCurrentCityIndex((prevIndex) => (prevIndex - 1 + cities.length) % cities.length);
  };

  useEffect(() => {
    const interval = setInterval(nextCity, 10000); // Change city every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const visibleCities = cities.slice(currentCityIndex, currentCityIndex + 3);

  return (
    <section id="home" className="home-section">
      <div className="background-blur" style={{ backgroundImage: `url(${visibleCities[0].image})` }} />
      <div className="city-card-container">
        {visibleCities.map((city, index) => (
          <div
            key={index}
            className="city-card"
            style={{ '--current-animation': city.animation }}
          >
            <img src={city.image} alt={city.name} className="city-image" />
            <div className="city-info">
              <h3 className="city-name">
                {city.name.split('').map((char, index) => (
                  <span key={index} style={{ color: `hsl(${index * 40}, 100%, 50%)` }}>
                    {char}
                  </span>
                ))}
              </h3>
              <p className="city-description">{city.description}</p>
              <a href="#about">
                <button className="about-more-button" onClick={() => setSelectedCity(city)}>About More</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <button className="nav-button left" onClick={prevCity}>&lt;</button>
      <button className="nav-button right" onClick={nextCity}>&gt;</button>
    </section>
  );
}

export default Home;
