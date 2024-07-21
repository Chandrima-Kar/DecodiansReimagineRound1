# Re-imagine Camel Website

Sheryians Coding School organised a hackathon for web developers, you can check it here -> [🚀HACKATHON] Reimagine](https://youtu.be/wy7cROuMUzo?si=FMFVW48MKlvA68nN). So, this is our re-imagination for the first round of this hackathon. Our team members chose to redesign Camel's website, which is live. It is a single-page website with a modern makeover to the original website, re-imagining its overall look and feel. You can see the difference below -> 

#### Camel original website -> [https://www.kokuyocamlin.com/camel/](https://www.kokuyocamlin.com/camel/) 

#### Camel re-imagine website -> [https://re-imagine-camel.web.app/](https://re-imagine-camel.web.app/)

## Check the demo video below ->



https://github.com/Chandrima-Kar/DecodiansReimagineRound1/assets/138314529/433f7782-532c-41a6-aabd-25f8acfe34af



## Getting Started with Cloning the Repo

1. Download the zip file.
2. Unzip it. You can see a folder is extracted name - `DecodiansReimagineRound1-main`
3. Go inside the folder, there will be another folder name - `DecodiansReimagineRound1-main`
4. Go inside it and open it in your VS code. 

## Go the terminal and write -

### 1. To go to the main folder
```
cd camel-website
```

### 2. To install the dependencies
```
npm i
``` 

### 3. To run the website
```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## ⚠️ In case tailwind CSS is not installed then install it for React [https://tailwindcss.com/docs/guides/create-react-app]

In the terminal paste this ->

 ```
 npm install -D tailwindcss
```
 ```
 npx tailwindcss init
```

Then go to the tailwind.config.js file and make the changes ->

```
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
```

Now go to the index.css file and update it with this ->

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```



