function fixEmptyLinks() {
    const links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const linkTextContent = link.textContent.trim();
      const ariaLabel = link.getAttribute('aria-label');
      const hasChildElements = link.children.length > 0;
      if (!linkTextContent && !ariaLabel && !hasChildElements) {
        // If the link is empty, add a title attribute to the link
        link.setAttribute('title', 'This link is empty');
      } else {
        const img = link.querySelector('img');
        if (img && !linkTextContent && !ariaLabel) {
          // If the link has an image and is empty, use the alt text as the link text
          const alt = img.getAttribute('alt');
          if (alt) {
            // const altTextElement = document.createElement('span');
            // altTextElement.textContent = alt;
            // link.appendChild(altTextElement);
          } else {
            // If the image doesn't have an alt attribute, add a title attribute to the link
            link.setAttribute('title', 'This link contains an image without an alt attribute');
          }
        }else{
            // If the image doesn't have an alt attribute, add a title attribute to the link
            // link.setAttribute('title', 'This link contains an image without an alt attribute');
      
        }
      }
    }
  }