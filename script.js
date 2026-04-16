const photos = [
"084c8795158e41880e62d65b989f8baff39ec000d766fa03cd91870148de3458.jpg",
"08c60bfce325de0b3c191604a954a1f2a3dfaade0bbd09da5c8c19bb320ded9d.jpg",
"0b5d7489d47a7685874a720a07afea2f6465fe30a75b2b8ddda451c18c845884.jpg",
"0cb946e5df6a3754bb842901b7bf6f1674261a797e89ea95015feb3cb1085ab1.jpg",
"111b964d830d61e9f9b457f2f9919626e095bdbcf64a9123685773e46aef5a7d.jpg",
"116bcd1262346cb0c674890eb52b7849d994462007a9a66cc25a0ff854208eb2.jpg",
"131e213b767dddcc494bc8267a617b49500ef647b9e4712fc1cfdd5cd6c6fe1e.jpg",
"1693d65332d27670ef385a29deb39fac3513a6b9f1cb8695831b0a03013a1c74.jpg",
"18add372c89ab20b930e92dab2112fc412e945e55a43cd4cfa48269fbca33ab6.jpg",
"1f53a01dcf5d93c84445f6fbb24b9ebe6bf72ec40e6b3bb31a612bc5a75a5998.jpg",
"1ff3d46a2ce258977a57afc4580cd3d070cf8b581f061a876b8755adbac9b212.jpg",
"200f7614473c858826ec9eb94c49a3146e1f9bf218309998d60633909e133448.jpg",
"2018212897cb4192e6979059a18d7e680532621b8d921cb79532558df802df63.jpg",
"208fff57ba018dff5d00622daa6927f8d187f10492ce0c9608cda28fcab667a8.jpg",
"20eb9d79e28dca2454071c6699de92c1753aca97f59d9130e63d157b8dd00218.jpg",
"225aaae05014e70baee930bcbdb9eef06ddf4ad93571e2c4904772c12194066f.jpg",
"2821734ed8f989b34d499eccfe8dc109e77b7bdb5b8803bd9ef5cdf45c346721.jpg",
"2af1bc0927c673c79a0f157ad5cbbb634050760647948180caf80687299fa1d2.jpg",
"31091538b92a0d4ece95cb7d2a8530cda6ba91f6163340bfa96058a35e907b95.jpg",
"321616c94e840fc9ee2aa0ad2eeb60909ef319756b8655df38479c7485718930.jpg",
"32eb0d2ae662872c3f51260fbbf961dcf0f2f12a71f08a98c4b39ecc44ed46f6.jpg",
"34f78b0eaa1183193a1abbe6ffd4e1f3c6e564c24a7c4d52f64233aae251fba9.jpg",
"3618d5cc88704daedd67c5063439c4e231ae217753672d18f89fb7baa21cd7ab.jpg",
"3743ba028ed4405069bc782c88fe091f9f94626ce2882a1b93fb6fbca778e7cb.jpg",
"3750ba9d59eb2b2a8b14fbcb3f2e997fde9ff31036dfe3bd98c2a598b5abe083.jpg",
"3b03a14256b9312688312767acb07b5f40b8f71c48f781ff5860967e760174d6.jpg",
"3b3018cbbd98924780772aa77453b85f7fb2d4d662fa1370092636bce96ad790.jpg",
"3e1295a61e71938b776cedb3ec8a191aa987ff66430f890fc45cb7bed1db666a.jpg",
"400bafcf32f4546b890b0e45f5ebfd3ff61887e4efd8db6ed3692fb4c4c7ba4e.jpg",
"43d68f2d4a0d0edb61db78ce62f9e504d34b99316ebd1438f8891006582e9631.jpg",
"43fc910561a48757a49e387a43c5c4e05e58c8b28b33e628e9b2104e31c0694f.jpg",
"44cb5e1487a4390b3f5361d756dce3c722e4006616a0a355c95c40c5778f9425.jpg",
"469341243114d59f065d4a5c8518f243eaad140806932fbc647208e36dcac822.jpg",
"4dc732f82a1028235d9a0dc6a98331e880c3a2673b44368f3b534ab9a66defd4.jpg",
"4fc042d53c161cebf59751b5fd88148f79d236b88f28de895bc119032018a56a.jpg",
"4fec7c82599dc600029a8ac7344aef22afabcb7cdc27fcd4cc950d6e787b05b2.jpg",
"51ebeeef380973d954affb0ce5f889434e10334869e9c1822916969af8b4f28c.jpg",
"5c29c1ed5a39ee2105eb9805606250a0bc23a09d29e7429338d3b079c79ce65c.jpg",
"5c96c2710360f3480f1081c962fa6925dc740ff770d6625fd720031241e10441.jpg",
"5d10a32fe90c36165ed8fcc88029bfa27cf7ea5711f8b9a0b1458f8d8f9ca19d.jpg",
"5ec3afd7865a03e01b5c4210e1a75f41553687c7a1ec6fb7c881865e591e0c8c.jpg",
"631f2329bcc8c4629a53f3b0bf6baa56929bd4c5f36c92ac669d813f1473ec6b.jpg",
"6b91011d6bfeb1835ccca3d456d50a1795a1699cc24cb475cb9c4cc07e3bedec.jpg",
"6ccbcfdcb9ca22f41083a33f4569d6d4ad57f2edef5562057e04d0f330af9a1a.jpg",
"741cb104890ee130aaf0bb15fbd0755da355cdd1ec05052718da60fa58664e4b.jpg",
"76d0311c14c398d549ae73457b0c99ef146fb84117be13485fdd3c39b5e9ce2b.jpg",
"779939ade30db9f3ee30a76e90742ab87acad8a0ffefdf00ad2092fc2c980d24.jpg",
"7e668ac58f2044b2cea1149de2405961ca80ae4009b79f0d76f035cfeb58e0dc.jpg",
"8114c9da72cf92f3a7785927413bb0d34c718b5cf96383e6c17837f777fc780c.jpg",
"814761020d7a18fb0c3e51b639bc6cd4c81166a35f23aad54ca7800d8f59796f.jpg",
"81afb195540d4a54243b8b4ac73bd28e4029bbf764cd327fc23e45d6be234b2f.jpg",
"821d969be6c9f32e436bc14acb6421ad10a5f5d505b388e568d55dcf08fdd70a.jpg",
"82356893c1e20955b85c81e3de2a24d035495536ce33a12998a1162a597b644a.jpg",
"863bdca7485c02dcc64a87231295ae39334ff96f6c5447fe92cb7dffd56c83af.jpg",
"866e7931e113bf58d140e507e8d5ebddc0dbaee5378ea24a0b655b5260eaef8f.jpg",
"886ea3bcf6bf91b582910b73e024265a635930f0baa24e861f1669cc94e8ba3f.jpg",
"89c4780fb9838eaada8b71458c3f69f3e850436dd56b55c347594e19789fdffd.jpg",
"8be1367df7a0a3c8ab8842ced016459c451b7304936c787192f4d840affc13be.jpg",
"8c369d26ef465dd8046c22e4a372fd77b0c24148e88b31bb4fd4b58063181c09.jpg",
"8d1c994ca78f38875e15f211d1bf8d852d43c27c4b37d7b2a5c6b64a85319bac.jpg",
"8f4096e117c0e70360a81bc9c3c4bf5cf93cc6946ab34a0e5bb04e3fbd936093.jpg",
"929bb4465a67c01bf71d136c0e7de7f923625282357f426f8cfa2dd7adbc6330.jpg",
"95d7de194697da95a9e9f1112581c67b7d1a460c37fc7e9709a6b070850a0a0f.jpg",
"9f88f160f1b6f006a161755bb5ecfca938d8b05fb926a63df4fd59f82e250069.jpg",
"a0f353f3677bb4aaf2037fa9cf16038601fed1e9ef419358316092a9cbb2f244.jpg",
"a1b37397d4cda0b4ac1d5a2ab2b5e566d052e665c84d7f20f299618d56388aef.jpg",
"a778149abbd25a6bb12da7ce9b08773b0c6206f7e9bec4f197621635a1127242.jpg",
"a7a1c98ed6528e73e5f2424ab282ad8560ced9fc8b606492524e01f82ee93ae6.jpg",
"a7e9d3debc968ce122cc27484c224339df8d309f80edff84832627011d0c61c4.jpg",
"aa9849b2988e07d82e7770872837d5054b84bd727074efd5fa30e4db6dcea9dc.jpg",
"ab0594e82e4a407ea3c01dca1b0ffbf068e8520236bc3d65b7c2d3ecf7cec967.jpg",
"bb143ce60571777652f2cc3e2147074db9c7131a8b5622462c860500b1f16263.jpg",
"bd9ac85a46556a79cc6fe3214da39954622c9b26c8dc809d6852d7d38c9b66c8.jpg",
"be6f7b4996256641a5f5e04b2eea7ef7fba257997c9fbdabdb553147cb9f214f.jpg",
"c67b836b76663610819976c8070be550f1384919513f23f5c097183723222ac3.jpg",
"c72c78dc560e8770820bb61e244af055dd743b03f9b9cd5611da1c2cef920e02.jpg",
"c771246ca709a1a8220d436b10bdbc402ef33343e5306fb8de797db989a468a0.jpg",
"c7fe5ec5038e6c922ee5ade559f0c671d1410df9493e8c119520e9ff8e853f21.jpg",
"c8cba0dbc1cb132f31df573b5385ea3b92fdf2af1a76dceecf70d8505fb94b10.jpg",
"c964145aa4ac8d4af3b7c7aaa8e2e104cc3c64bc98e752a53dbc44d80e2253e1.jpg",
"d1b49216d1cddcdcbfc133fd91bdd6a873d4998c1533275a656ad8f85cd60491.jpg",
"d2234e435646393d07c31addba787f7fc9f8ebe7616fdd064341ce0bb2543999.jpg",
"d3997c1672e588688ec7fc9ae49dd7f47a621b59c692058de7856e0ab6743602.jpg",
"d68a4a7578683f08b8c63f5515c56b46e766b512a74e751ee0729d70aacb8c3f.jpg",
"d8e24bcd56e4f629e115b8332284704baed20a30badbe775583341e16ccc7a9a.jpg",
"dd9f35566b0d432eebc8a310bed987383bde5f5fbfafe910a24108cfdf1726b2.jpg",
"e1ab2b940dbff398bdc843853aa803477aafe163f2e99ac68434ef6516d5dc42.jpg",
"e6b33278f673aa517a5962716eb6f90524cd03f9d1c19f024bb2cfeef9ef29dc.jpg",
"e7454f85f16462493223c157a3d7ee6ab1415da1c1edb286f5033ddd0b248007.jpg",
"e93ee897e675e184e3739246f286bbaeb14d846ea488597c6c2afabcc1439743.jpg",
"e982c6eeea01d4d0dc7b5ea9cde0efa8cbf67a6a1079ab5dfc666bf7671190e5.jpg",
"ea80e221b3372a195d1babbfa7cf23387975d1a196c2f1a6a711d42042027252.jpg",
"ebacf7f0435b7e7b2537c04f34d7ad0e7901f900dc4e21c94eb17f242b422622.jpg",
"ec5573ce2f06db24c2316cc1b13442cddeb9474a68b933611a2f886199f940e3.jpg",
"ed8d5e3eaa864baac77a8043819bf423389b33673654e6751f3fa0676b9bf003.jpg",
"f619cc5f7434d9a0a14812f29a9c8949f6cf58619d4d77e1d7269898e8539094.jpg",
"f8a8703ddfcdc8d7e5750a6dca9a8d5ce8ea488666e385cdae6a03add48b80d3.jpg",
"f9cfff61a2b6227a004a7f73574fdcbf031fb54d433237e50f86084b0d5a9f14.jpg",
"ff0fd201c1682e890d42c293f842e1cf1699bdb981914390832536c4a0030229.jpg"
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function createGallery() {
    photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        // Randomize scrapbook styles
        const rand = Math.random();
        if (rand < 0.2) item.classList.add('scrapbook-left');
        else if (rand < 0.4) item.classList.add('scrapbook-right');
        else if (rand < 0.6) item.classList.add('dark-frame');
        else if (rand < 0.75) item.classList.add('featured-glow');
        
        const img = document.createElement('img');
        img.src = `img/${photo}`;
        img.alt = `Photo ${index + 1}`;
        img.loading = "lazy";
        
        item.appendChild(img);
        
        item.addEventListener('click', () => openLightbox(index));
        
        gallery.appendChild(item);
    });
}

function openLightbox(index) {
    currentIndex = index;
    updateLightboxImage();
    lightbox.style.display = 'flex';
    // Add small delay to allow display flex to apply before opacity transition
    setTimeout(() => {
        lightbox.classList.add('visible');
    }, 10);
}

function closeLightbox() {
    lightbox.classList.remove('visible');
    // Wait for transition to finish
    setTimeout(() => {
        lightbox.style.display = 'none';
        lightboxImg.src = ''; // Clear image smoothly
    }, 500); // matches CSS transition duration
}

function updateLightboxImage() {
    if (photos.length === 0) return;
    lightboxImg.src = `img/${photos[currentIndex]}`;
}

function nextImage(e) {
    if (e) e.stopPropagation();
    currentIndex = (currentIndex + 1) % photos.length;
    updateLightboxImage();
}

function prevImage(e) {
    if (e) e.stopPropagation();
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateLightboxImage();
}

// Event Listeners
closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Close on background click
lightbox.addEventListener('click', (e) => {
    // Only close if clicking the background, not the image or buttons
    if (e.target === lightbox || e.target.classList.contains('lightbox-img-wrapper')) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('visible')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    }
});

// Initialize
createGallery();

// --- Interactive Spiderweb Canvas ---
const canvas = document.createElement('canvas');
canvas.id = 'spiderweb';
// We prepend to .hero-header so it's a background behind the text
document.querySelector('.hero-header').prepend(canvas);
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
let mouse = { x: -1000, y: -1000 };

function initCanvas() {
    const header = document.querySelector('.hero-header');
    width = canvas.width = window.innerWidth;
    height = canvas.height = header.offsetHeight;
    
    particles = [];
    const count = window.innerWidth < 768 ? 40 : 80;
    for(let i=0; i<count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 1.0,
            vy: (Math.random() - 0.5) * 1.0,
            radius: Math.random() * 1.5 + 0.5,
            isHeart: Math.random() > 0.8 // 20% of particles are hearts
        });
    }
}

window.addEventListener('resize', initCanvas);

const headerMouseCatcher = document.querySelector('.hero-header');
headerMouseCatcher.addEventListener('mousemove', (e) => {
    const rect = headerMouseCatcher.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});
headerMouseCatcher.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
});

function animateCanvas() {
    requestAnimationFrame(animateCanvas);
    ctx.clearRect(0, 0, width, height);
    
    for(let i=0; i<particles.length; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        
        if(p.x < 0 || p.x > width) p.vx *= -1;
        if(p.y < 0 || p.y > height) p.vy *= -1;
        
        if (p.isHeart) {
            ctx.fillStyle = 'rgba(180, 50, 80, 0.6)'; // deep red gothic heart
            const size = p.radius * 3.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y + size / 4);
            ctx.quadraticCurveTo(p.x, p.y, p.x + size / 4, p.y);
            ctx.quadraticCurveTo(p.x + size / 2, p.y, p.x + size / 2, p.y + size / 4);
            ctx.quadraticCurveTo(p.x + size / 2, p.y + size / 2, p.x, p.y + size);
            ctx.quadraticCurveTo(p.x - size / 2, p.y + size / 2, p.x - size / 2, p.y + size / 4);
            ctx.quadraticCurveTo(p.x - size / 2, p.y, p.x - size / 4, p.y);
            ctx.quadraticCurveTo(p.x, p.y, p.x, p.y + size / 4);
            ctx.fill();
        } else {
            ctx.fillStyle = 'rgba(220, 179, 195, 0.4)';
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        }
        
        for(let j=i+1; j<particles.length; j++) {
            let p2 = particles[j];
            let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if(dist < 120) {
                ctx.strokeStyle = `rgba(220, 179, 195, ${0.2 - dist/120*0.2})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
        
        let distMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if(distMouse < 180) {
            ctx.strokeStyle = `rgba(220, 179, 195, ${0.5 - distMouse/180*0.5})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            
            p.x += (mouse.x - p.x) * 0.015;
            p.y += (mouse.y - p.y) * 0.015;
        }
    }
}

// Start animation loop
initCanvas();
animateCanvas();

// --- Static Tangled Webs Between Gallery Photos ---
function drawGalleryWebs() {
    let webCanvas = document.getElementById('gallery-webs');
    const container = document.querySelector('.gallery-container');
    if(!container) return;
    
    if(!webCanvas) {
        webCanvas = document.createElement('canvas');
        webCanvas.id = 'gallery-webs';
        webCanvas.style.position = 'absolute';
        webCanvas.style.top = '0';
        webCanvas.style.left = '0';
        webCanvas.style.width = '100%';
        webCanvas.style.height = '100%';
        webCanvas.style.pointerEvents = 'none';
        webCanvas.style.zIndex = '1'; // Behind photos but in gallery
        container.style.position = 'relative'; 
        container.prepend(webCanvas);
    }
    
    // Slight delay to allow DOM to recalculate positions correctly
    setTimeout(() => {
        const ctx = webCanvas.getContext('2d');
        webCanvas.width = container.offsetWidth;
        webCanvas.height = container.offsetHeight;
        
        const items = document.querySelectorAll('.gallery-item');
        const points = [];
        
        const containerRect = container.getBoundingClientRect();
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            // Get center point of each photo relative to the container
            points.push({
                x: (rect.left - containerRect.left) + rect.width / 2,
                y: (rect.top - containerRect.top) + rect.height / 2
            });
        });
        
        ctx.clearRect(0, 0, webCanvas.width, webCanvas.height);
        
        // Draw elegant sagging webs connecting nearby photos
        for(let i = 0; i < points.length; i++) {
            for(let j = i + 1; j < points.length; j++) {
                const dist = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
                // Connect if within a plausible aesthetic distance
                if(dist < 700) {
                    ctx.strokeStyle = `rgba(220, 179, 195, ${0.12 - (dist/700)*0.12})`; // very subtle
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    
                    // Create a realistic hanging web curve
                    const midX = (points[i].x + points[j].x) / 2;
                    // Web sags down slightly due to gravity
                    const sag = dist * 0.15; 
                    const midY = ((points[i].y + points[j].y) / 2) + sag; 
                    
                    ctx.quadraticCurveTo(midX, midY, points[j].x, points[j].y);
                    ctx.stroke();
                }
            }
        }
    }, 100);
}

// Draw webs initially and automatically redraw on layout shifts (like lazy loaded images popping in)
const observer = new ResizeObserver(() => {
    drawGalleryWebs();
});
observer.observe(document.querySelector('.gallery-container'));
