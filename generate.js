import fetch from "node-fetch";
// import { Configuration, OpenAIApi } from 'openai';
import { writeFileSync } from "fs";

// const configuration = new Configuration({
//     apiKey : "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"
// })

// const openai = new OpenAIApi(configuration);

// const prompt = "a hamster wearing a pirate hat with a hook on its paw digital art";

// const result = await openai.createImage({
//     prompt, 
//     n: 1, 
//     size: "1024x1024",
//     user: "CameronFung"
// });

// const url = result.data.data[0].url;

const url = "https://oaidalleapiprodscus.blob.core.windows.net/private/org-QeC7ZTxfNMcvjFmNESArRyDj/user-3opTxCsowq2CdcrpHmBcGVmZ/img-AmRoXGiCGmGm3AWdwjwXUa6W.png?st=2022-11-04T22%3A03%3A51Z&se=2022-11-05T00%3A03%3A51Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-04T01%3A20%3A27Z&ske=2022-11-05T01%3A20%3A27Z&sks=b&skv=2021-08-06&sig=FF5%2BdFP54nXxvR6tHCweuogO77hYVfx2Tksccgbrukk%3D";

// save url to disk
const imgResult = await fetch(url);
const blob = await imgResult.blob();
const buffer = Buffer.from( await blob.arrayBuffer() );
writeFileSync( `./img/${Date.now()}.png`, buffer );
