function submits()
{
    url=document.getElementById('url').value;
    document.getElemntById("img").src= url;
}

console.log('m15 version:', m15.version);

classifier=m15.ImageClassifier('MobileNet',modelLoaded)