import { Posts } from "../../../components/Posts";

export default function Blog(){
    interface DataItem {
        id: number;
        title: string;
        background:string;
        time : string;
        url:string
      }
      
    const data: DataItem[] = [
        {
          id: 1,
          title: "Must to know Array Methods in Javascript",
          background:'#FFE8E5',
          time:'20-09-2023',
          url:"https://dev.to/ritikrana/must-to-know-array-methods-in-javascript-1oil"
        },
        {
          id: 2,
          title: "Understand 'this' keyword in JavaScript",
          background:'#FFF2C5',
          time:'20-09-2023',
          url:"https://dev.to/ritikrana/understand-this-keyword-in-javascript-380f"


        },
        {
          id: 3,
          title: "What the hack is call, apply, bind in JavaScript",
          background:'rgb(200 239 233)',
          time:'20-09-2023',
          url:"https://dev.to/ritikrana/what-the-hack-is-call-apply-bind-in-javascript-11ce"


        },
        {
          id: 4,
          title: "Closure, Currying and IIFE in JavaScript",
          background:'rgb(188 249 212)',
          time:'20-09-2023',
          url:"https://dev.to/ritikrana/what-the-hack-is-closure-currying-and-iife-in-javascript-32m9"


        },
      ];
    return(
        <div className="container">
            <Posts data={data}/>
        </div>
    )
}