# YouTube Channel Research Prompt

**How to use:** Copy the prompt below into Claude, ChatGPT, or Perplexity (with web search enabled). Run it in batches of ~15 providers at a time for best results.

---

## THE PROMPT

```
I need to find the official YouTube channels for these Singapore-based early childhood education providers. For each one, search for their YouTube channel and give me:

1. The exact YouTube channel URL (e.g. https://www.youtube.com/@channelname or https://www.youtube.com/channel/UCxxxx)
2. Whether the channel is active (has uploaded in the last 12 months)
3. Approximate subscriber count
4. If NO channel exists, say "No channel found"

IMPORTANT: Only return channels that are clearly the OFFICIAL channel for that provider. Do not guess or return channels with similar names that belong to different organisations.

Here are the providers to search:

[PASTE 10-15 PROVIDER NAMES HERE, e.g.:]

1. Chengzhu Mandarin Centre (website: chengzhu.edu.sg)
2. Berries World of Learning (website: berriesworld.com)
3. Kumon Singapore (website: kumon.sg)
4. Julia Gabriel Centre (website: juliagabriel.com)
5. MindChamps (website: mindchamps.org)
6. National Library Board Singapore (website: nlb.gov.sg)
7. Science Centre Singapore (website: science.edu.sg)
8. Kindermusik With Love Studios (website: kindermusikwithlovestudios.com.sg)
9. Kiztopia (website: kiztopia.com)
10. Playeum (website: playeum.com)

Please format the output as a table with columns: Provider | YouTube URL | Active? | Subscribers
```

---

## TIPS

1. **Run in batches** — 10-15 at a time works best. The full list has 145 resources.

2. **Start with the big names** — NLB, Science Centre, MOE, MindChamps, Julia Gabriel, Kumon, British Council, Yamaha etc. are most likely to have active channels.

3. **Verify manually** — AI tools sometimes return wrong channels. Click each URL to confirm it's the right provider before adding to the tracker.

4. **Check website footers** — The fastest manual method is visiting each provider's website and looking at the social media icons in the footer. Most link directly to their YouTube channel.

5. **Skip unlikely candidates** — Small single-location venues like Better Play, Little Bear's House, or The Joy of Toys probably don't have YouTube channels. Focus your time on education providers and government agencies.

6. **What counts as useful:** Channels with class previews, educational content, or parent resources. A channel with just one corporate promo video from 3 years ago probably isn't worth linking.

---

## AFTER FINDING CHANNELS

1. Fill in the YouTube URL column in the tracker spreadsheet
2. Mark status as "Has Channel" or "No Channel"
3. Then update your `data/resources.js` — add the `yt` field to each resource that has a channel
4. Commit and push to GitHub — Vercel auto-deploys
