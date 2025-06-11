import Card from "./Card"

const CardList = ({ selected }) => {
  return (
    <div className=" w-full h-full flex justify-center items-end pt-10 pb-4">
        <Card selected={selected} priority={0}/>
        <Card selected={selected} priority={1}/>
        <Card selected={selected} priority={2}/>
        <Card selected={selected} priority={3}/>
        <Card selected={selected} priority={4}/>
    </div>
  )
}

export default CardList