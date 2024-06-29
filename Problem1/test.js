let string  = 'Chinmay Kulkarni'

let obj  = {}

let newArray  = string.toLocaleUpperCase().split('').filter((item)=> item !== ' ')
for(let name of newArray)
{
    obj[name] = (obj[name])+1 || 1
}


for(let value in obj)
{
    console.log(`${value}-${obj[value]}`)

}
