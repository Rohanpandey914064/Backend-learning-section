const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/message",(req,res)=>{
    res.json({
        "title":"Rohan pandey ki story",
        "story":`In the heart of a quiet town stood a little shop with a sign that read M. Darius – Time Restored. Inside, clocks of every shape and size ticked in gentle harmony, their rhythms weaving a soft lullaby through the air.
                M. Darius was an old man with silver hair and eyes that seemed to hold centuries. He had spent his life repairing timepieces, but the townsfolk whispered that he could do more than fix broken gears—that he could mend moments themselves.
                One rainy evening, a young woman named Lila entered, clutching a small, cracked pocket watch. “It belonged to my father,” she said, her voice trembling. “It stopped the day he… left.”
                Darius took the watch in his hands, feeling its weight. “Do you wish for it to work again?”
                “Yes,” she whispered, “but more than that… I wish I could have one more hour with him.”
                The old man nodded slowly. He wound the watch, and as the second hand began to move, the shop’s ticking grew louder, deeper, until the air shimmered. Lila blinked—and found herself standing in her childhood home, her father at the kitchen table, smiling as if no time had passed.
                They spoke, laughed, and shared stories until the watch in her hand ticked its final second. The world blurred, and she was back in the shop, tears on her cheeks.
                Darius handed her the now-silent watch. “Time is a gift,” he said softly. “But it is precious because it cannot be kept.”
                When Lila left, the shop’s doorbell chimed. Inside, M. Darius looked at the rows of clocks, each one holding a story, and wound them all once more—just in case someone else came seeking a lost hour.
                `
    });
});

app.post("/api/sm",(req,res)=>{
    const { a , b } = req.body;

    res.json({
        sum: Number(a) + Number(b),
        mul: Number(a) * Number(b)
    });
});

app.listen(3000,()=>{
    console.log("server running...");
});