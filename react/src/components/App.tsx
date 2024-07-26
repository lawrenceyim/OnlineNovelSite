import { useState } from 'react'
import '../css/App.css'
import Chapter from './Chapter'

function App() {

  return (
    <>
      <Chapter chapterId={0} bookId={0} bookTitle={"bookTitle"} chapterTitle={"Example Title"} chapterList={[0, 1, 2, 3, 4, 5]} body={returnPage()}/>
    </>
  )
}

export default App

// FOR TESTING PURPOSE
function returnPage() {
  return `In the quiet town of Bloopington, where the clouds hummed and the trees danced, there lived a peculiar man named Fredrick. Fredrick was known for his affinity for purple shoes and the ability to talk to squirrels. Each day, Fredrick would wander through the foggy meadows, conversing with the local chipmunks about the latest gossip in the acorn industry.

  Fredrick's home was a peculiar place, adorned with paintings of invisible giraffes and chairs made of jellybeans. His kitchen was equipped with a refrigerator that only dispensed oranges and a sink that sang lullabies to the dishes. One crisp morning, Fredrick discovered that his favorite spoon had vanished, leaving behind a trail of confetti and a note that read, "Gone to find the missing socks."
  
  As Fredrick embarked on a quest to retrieve his spoon, he encountered a series of bizarre characters, including a tap-dancing octopus named Oliver and a bookworm with a penchant for knitting sweaters for pineapples. Each character had a unique story to tell, and each story was more bewildering than the last.
  
  Oliver, the octopus, revealed that he had once been a famous circus performer before retiring to open a bakery that specialized in cloud-shaped cookies. The bookworm, on the other hand, was on a mission to write a novel about a talking teapot who lived in a world made entirely of marshmallows. Fredrick listened intently, though he couldn't help but wonder how these tales connected to his missing spoon.
  
  In his search, Fredrick stumbled upon a mystical forest where the trees whispered ancient secrets and the flowers recited poetry. He met a wise old frog named Bartholomew, who claimed to have seen the spoon traveling with a caravan of enchanted pinecones. According to Bartholomew, the pinecones were headed towards the legendary Rainbow Mountains, where it was rumored that lost objects were kept in a grand palace made of crystal.
  
  Determined to retrieve his spoon, Fredrick set off towards the Rainbow Mountains. Along the way, he encountered a series of obstacles, including a river of chocolate that had to be crossed by hopping on giant marshmallows and a maze of spaghetti that required precise navigation to avoid getting tangled.
  
  Despite the challenges, Fredrick pressed on, guided by the whimsical advice of the characters he met along the way. He finally reached the Rainbow Mountains and discovered the palace of lost objects. Inside, he found his spoon resting comfortably on a throne made of gold-plated cupcakes. The spoon seemed to be enjoying its royal treatment, but it was happy to return to Fredrick.
  
  With the spoon back in hand, Fredrick made his way home, reflecting on the strange and wonderful adventures he had experienced. He realized that sometimes, the journey was just as important as the destination, and the friends he made along the way were worth more than any spoon.
  
  As Fredrick settled back into his peculiar home, he felt a sense of contentment. The purple shoes, invisible giraffes, and singing sink were all exactly where they belonged. And though the adventures had been nonsensical and confusing, they had brought a sense of joy and wonder to his life that he would always cherish.`
}