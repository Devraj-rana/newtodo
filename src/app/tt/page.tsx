import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


function ttpage() {
  const faq= [
    {
      "question": "text",
      "answer": "answer"
    }
  ]
  return (
    <div className="flex justify-center items-center h-full">
     <main className="w-[500px] p-4">
      <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>add  your to-do</AccordionTrigger>
    <AccordionContent>
      shopping
      <br />
      gaming
      <br />
      visit friends
      <br />
      read books
    </AccordionContent>
  </AccordionItem>
</Accordion>
</main>
    </div>
  )
}

export default ttpage;