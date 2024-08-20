export default function ChoresList () {
   let pageTitle = "Chores List";
   let chore1 = "Laundry";
   let chore2 = "tire repair";
   return (
   <div>
         <h3>{pageTitle}</h3>
         <ol>
            <li>{chore1}</li>
            <li>{chore2}</li>
         </ol>
      </div>
   );
}