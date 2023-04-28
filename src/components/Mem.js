import React from 'react';
import Upvote from './Upvote';
import Downvote from './Downvote';
import { useHistory } from 'react-router-dom';


// const Mem = ({ title, upvotes, downvotes, img, onUpvote, onDownvote }) => {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <img src={img} alt={title} />
//       <div>
//         <button onClick={onUpvote}>Upvote ({upvotes})</button>
//         <button onClick={onDownvote}>Downvote ({downvotes})</button>
//       </div>
//     </div>
//   );
// };







const images = [
  {
    id: 1,
    src: 'https://www.digitalmomblog.com/wp-content/uploads/2020/03/covid-variant-meme.jpeg',
    alt: 'Zdjęcie zwierzęcia 1',
    title: 'Mem 1',
    upvotes: 6,
    downvotes: 0,
   // img: 'path/to/image1.png',

  },
  {
    id: 2,
    src: 'https://i0.wp.com/winkgo.com/wp-content/uploads/2017/09/49-Funny-School-Memes-Not-Everyone-Likes-School-02.jpg?resize=720%2C511&ssl=1',
    alt: 'Zdjęcie zwierzęcia 1',
    title: 'Mem 2',
    upvotes: 5,
    downvotes: 3,
    //img: 'path/to/image1.png',
  },
  {
    id: 3,
    src: 'https://static.wixstatic.com/media/82daf4_ff1c0ff1c7fa4ae59bff4fae6b167008.jpg/v1/fill/w_564,h_522,al_c,lg_1,q_80/82daf4_ff1c0ff1c7fa4ae59bff4fae6b167008.jpg',
    alt: 'Zdjęcie zwierzęcia 1',
    title: 'Mem 3',
    upvotes: 4,
    downvotes: 6,
    //img: 'path/to/image1.png',
  },
];


const Image = ({ image }) => {
  return (
    <div>
      <h3>{image.title}</h3>
      <img src={image.src} alt={image.alt} />
      <p2>Upvotes: {image.upvotes}</p2>
      <p2>Downvotes: {image.downvotes}</p2>
    </div>
  );
};

const Mem = ({ title, upvotes, downvotes, img, onUpvote, onDownvote }) => {
  return (
    <div>
      {images.map((image) => (
        <><Image key={image.id} image={image} /><Upvote /><Downvote /></>
      ))
      }
      {/* <div>
            <img src="" alt="" />
            <Upvote onClick={handleLike}/>
            <p>{likes} likes</p>
        </div> */ }
    ;
    </div>
  );
};



// // const HotPage = () => {
// //     const history = useHistory();
// //     // eslint-disable-next-line no-undef
// //     const [likes, setLikes] = useState(0);

// //     const handleLike = () => {
// //         setLikes(likes + 1);
// //     };

// //     // Przekierowanie użytkownika, jeśli zdjęcie osiągnie 5 polubień
// //   const useEffect = (() => {
// //         if (likes > 5) {
// //             history.push('/hot');
// //         }
// //     }, [likes, history]);

// //     return (
// //         <div>
// //             <img src="" alt="" />
// //             <Upvote onClick={handleLike}/>
// //             <p>{likes} likes</p>
// //         </div>
// //     );
// // };


// // const ImageGallery = () => {
// //   return (
// //     <div>
// //       {images.map((image) => (
// //         <div key={image.id}>
// //           <h3>{image.title}</h3>
// //           <img src={image.src} alt={image.alt} />
// //           <p>Upvotes: {image.upvotes}</p>
// //           <p>Downvotes: {image.downvotes}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// export default Mem;
export default Mem;