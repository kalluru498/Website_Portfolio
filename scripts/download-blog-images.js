const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
    filename: 'nextjs-portfolio.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
    filename: 'typescript.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/8438923/pexels-photo-8438923.jpeg',
    filename: 'ai-chatbot.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    filename: 'responsive-design.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
    filename: 'tailwind.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/11035543/pexels-photo-11035543.jpeg',
    filename: 'react-state.jpg'
  }
];

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, '../public/blog', filename);
  
  // Create the blog directory if it doesn't exist
  const dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const file = fs.createWriteStream(filepath);

  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filepath, () => {});
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

// Download all images
images.forEach(img => downloadImage(img.url, img.filename));