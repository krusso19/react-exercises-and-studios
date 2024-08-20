export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://th.bing.com/th/id/OIP.411KUCYoXRZMm-Z4YXTqZQHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7";
   let book2 = "https://www.bing.com/th?id=OIP._ecBSGWHJ7NESvPLlSYKhAHaLL&w=123&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
   let book3 = "https://www.bing.com/th?id=OPHS.iixzO73DhLG41w474C474&o=5&pid=21.1&w=148&h=225&qlt=100&dpr=1.3&bw=6&bc=FFFFFF&c=17";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="All the Light We Cannot See" />
         <img src={book2} alt="The Daughter of Doctor Moreau" />
         <img src={book3} alt="The Latecomer" />
      </div>      
   );
}