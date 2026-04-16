# YouTube Feature — Update Instructions

## 1. Replace `components/DetailModal.js`
Replace with the `DetailModal.js` file provided.

## 2. Add CSS to `components/DetailModal.module.css`
Add these styles at the bottom of your existing file:

```css
.actionButtons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.youtubeBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #FF0000;
  color: #fff;
  text-align: center;
  padding: 14px 20px;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 800;
  text-decoration: none;
  font-family: 'Nunito', sans-serif;
  letter-spacing: 0.3px;
}
```

Also wrap your existing `.visitBtn` rule — no changes needed to it,
but make sure it's not overridden by the new `.actionButtons` container.

## 3. Add `yt` field to resource data in `data/resources.js`
Add `"yt":""` to each resource object. When you find a provider's
YouTube channel, fill in the URL.

Example — before:
```js
{"id":10,"name":"Chengzhu Mandarin Centre",...,"url":"https://www.chengzhu.edu.sg","cost":"$200+","loc":"Rochester Mall"}
```

After (with YouTube):
```js
{"id":10,"name":"Chengzhu Mandarin Centre",...,"url":"https://www.chengzhu.edu.sg","cost":"$200+","loc":"Rochester Mall","yt":"https://www.youtube.com/@chengzhu"}
```

Resources without a YouTube channel just keep `"yt":""` — the button
won't show.

## 4. Test
- Open a resource that has a `yt` value → should see both buttons
- Open a resource without `yt` → should see only "Visit Website"
