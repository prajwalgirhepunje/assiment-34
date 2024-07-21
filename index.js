const Marks=[68,87,99,45,50,91,93];
 
let LargestNumber =Marks[0];

for(let i =1;
    i<Marks.length;i++)
    {
    if(Marks[i]>LargestNumber)
        {
        LargestNumber=Marks[i];

    }
}
console.log(LargestNumber);

