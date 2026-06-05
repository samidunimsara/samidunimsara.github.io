'use strict';

// ─── Navbar scroll ────────────────────────────────────────────────────────────
(function () {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }
})();

// ─── Active nav link on scroll ────────────────────────────────────────────────
(function () {
  const sections = ['home', 'about', 'blog', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');
  const navH = 70;

  const getActive = () => {
    const y = window.scrollY + navH + 60;
    let active = sections[0];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= y) active = id;
    }
    return active;
  };

  const update = () => {
    const active = getActive();
    navLinks.forEach(l => {
      l.classList.toggle('active', l.dataset.section === active);
    });
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// ─── Hamburger ────────────────────────────────────────────────────────────────
(function () {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  const close = () => {
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
  };

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('open', open);
  });

  menu.querySelectorAll('.mob-link').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

// ─── Terminal typewriter sequence ─────────────────────────────────────────────
(function () {
  const steps = [
    { cmd: 'cmd1', out: 'out1', cmdDelay: 200,  outDelay: 800  },
    { cmd: 'cmd2', out: 'out2', cmdDelay: 1000, outDelay: 1700 },
    { cmd: 'cmd3', out: 'out3', cmdDelay: 2100, outDelay: 2800 },
  ];

  steps.forEach(({ cmd, out, cmdDelay, outDelay }) => {
    const cmdEl = document.getElementById(cmd);
    const outEl = document.getElementById(out);
    if (!cmdEl || !outEl) return;

    // Reset typewriter and replay
    setTimeout(() => {
      cmdEl.style.animation = 'none';
      cmdEl.style.width = '0';
      void cmdEl.offsetHeight;
      cmdEl.style.animation = '';
    }, cmdDelay);

    setTimeout(() => {
      outEl.classList.add('visible');
    }, outDelay);
  });
})();

// ─── Counting number animation ────────────────────────────────────────────────
(function () {
  const counters = document.querySelectorAll('.stat-val[data-target]');

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    };

    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => io.observe(el));
})();

// ─── Scroll reveal ────────────────────────────────────────────────────────────
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  const targets = [
    '.contact-link',
    '.about-grid',
    '.spec-item',
    '.disclosure-box',
    '.blog-card',
  ];

  document.querySelectorAll(targets.join(',')).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.04}s`;
    io.observe(el);
  });
})();

// ─── Contact form ─────────────────────────────────────────────────────────────
(function () {
  const form       = document.getElementById('contact-form');
  if (!form) return;

  const nameInput  = document.getElementById('input-name');
  const emailInput = document.getElementById('input-email');
  const msgInput   = document.getElementById('input-msg');
  const status     = document.getElementById('form-status');
  const btnLabel   = document.getElementById('btn-label');
  const submitBtn  = document.getElementById('submit-btn');
  const errName    = document.getElementById('err-name');
  const errEmail   = document.getElementById('err-email');
  const errMsg     = document.getElementById('err-msg');

  const setError = (input, errEl, msg) => {
    errEl.textContent = msg;
    input.classList.toggle('error', !!msg);
  };

  const validate = () => {
    let ok = true;

    if (!nameInput.value.trim()) {
      setError(nameInput, errName, '> field required'); ok = false;
    } else setError(nameInput, errName, '');

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      setError(emailInput, errEmail, '> field required'); ok = false;
    } else if (!emailRe.test(emailInput.value)) {
      setError(emailInput, errEmail, '> invalid email format'); ok = false;
    } else setError(emailInput, errEmail, '');

    if (!msgInput.value.trim()) {
      setError(msgInput, errMsg, '> field required'); ok = false;
    } else setError(msgInput, errMsg, '');

    return ok;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate()) return;

    submitBtn.disabled = true;
    btnLabel.textContent = '> sending...';
    status.style.color = 'var(--text-dim)';
    status.textContent = '';

    // Simulate — replace with Formspree/EmailJS
    await new Promise(r => setTimeout(r, 1400));

    btnLabel.textContent = './send.sh';
    submitBtn.disabled = false;
    status.style.color = 'var(--h1-green)';
    status.textContent = '> exit 0 — message sent successfully!';
    form.reset();

    setTimeout(() => { status.textContent = ''; }, 5000);
  });

  [nameInput, emailInput, msgInput].forEach(input => {
    input.addEventListener('input', () => input.classList.remove('error'));
  });
})();

// ─── Smooth anchor scroll ─────────────────────────────────────────────────────
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();

// ─── Konami easter egg ────────────────────────────────────────────────────────
(function () {
  const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let idx = 0;

  document.addEventListener('keydown', e => {
    idx = (e.key === seq[idx]) ? idx + 1 : (e.key === seq[0] ? 1 : 0);
    if (idx === seq.length) {
      idx = 0;
      const msg = document.createElement('div');
      msg.style.cssText = `
        position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);
        background:#000;border:1px solid var(--h1-green);padding:.75rem 1.5rem;
        font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--h1-green);
        border-radius:3px;z-index:99999;pointer-events:none;
        animation:fade-up .4s ease both;
      `;
      msg.textContent = '> You found the secret. Happy hacking!';
      document.body.appendChild(msg);
      setTimeout(() => msg.remove(), 3500);
    }
  });
})();

// ─── Blog Modal Logic ────────────────────────────────────────────────────────
const BLOG_POSTS = {
  'exploiting-unprotected-functionality': {
    filename: 'Exploiting-Unprotected-Functionality.md',
    title: 'Exploiting Unprotected Functionality to Access User Profiles',
    content: `
      <h2>1. Introduction</h2>
      <p>My first step when finding a target to hack is to search for old websites using Google. You can use Google dork queries to find outdated web applications. For example, you might try using a query like:</p>
      <div class="modal-terminal-log">site:target.com "login"
site:target.com "admin"
site:target.com inurl:old</div>
      <p>These techniques increase the chances of finding legacy applications that may have forgotten vulnerabilities.</p>

      <h2>2. Discovery</h2>
      <p>Using this method, I identified a legacy application indexed in 2019. After specifying the application with the query <code>site:target.com</code>, I discovered more URLs related to the website. One URL caught my attention:</p>
      <div class="modal-terminal-log">target.com/profile_center.aspx?qs=s4srd4sfd4tsfd5sg5sd5sd5sd5sd5x6f6s55f7s58s5</div>
      <p>Navigating to this link directly logged me into someone's profile, allowing me to view and edit their sensitive information including name, address, email, and description without authentication.</p>

      <h2>3. Enumeration via Waymore</h2>
      <p>To find more leaked profiles, I utilized <code>waymore</code> to gather historical URLs from archives (Wayback Machine, URLScan, etc.):</p>
      <div class="modal-terminal-log">
$ waymore -i sub.target.com -mode U -oU sub.target.com.waymore</div>
      
      <p>I then parsed the results to search for the specific profile page endpoint and parameter:</p>
      <div class="modal-terminal-log">
$ cat sub.target.com.waymore | grep "target.com/profile_center.aspx?qs="</div>
      <p>This retrieved six unique valid session values for the <code>qs</code> parameter, giving me direct administrative access to six different accounts.</p>

      <h2>4. Impact & Resolution</h2>
      <p>This is a case of unprotected functionality and broken access control, where the application lacks proper authentication/authorization checks. An attacker could directly access user profile management features simply by harvesting valid parameters from web history archives.</p>
      <p>I reported this to the program via HackerOne. It was triaged as Medium severity due to the unpredictable/high-entropy parameter string, and resulted in a <strong>$500 bounty</strong> payment.</p>
    `
  },
  'auth-bypass-h1': {
    filename: 'auth-bypass-h1.md',
    title: 'Bypassing authentication on a private HackerOne target',
    content: `
      <h2>1. Summary</h2>
      <p>This writeup covers an authentication bypass vulnerability identified on a private target on HackerOne. By exploiting a JSON Web Token (JWT) signature verification flaw, I was able to forge user tokens and log in as any administrator.</p>

      <h2>2. Vulnerability Details</h2>
      <p>The application utilized JWTs to authenticate API requests. Inspecting the JWT header revealed the following structure:</p>
      <div class="modal-terminal-log">
{
  "alg": "HS256",
  "typ": "JWT"
}</div>
      <p>I attempted to change the algorithm to <code>"none"</code> (a classic JWT bypass), but the server rejected it with a <code>401 Unauthorized</code> status. However, when I changed the algorithm from <code>"RS256"</code> (Asymmetric) to <code>"HS256"</code> (Symmetric), the server verified the token using the public key as the symmetric HMAC shared secret (the Key Confusion Attack).</p>

      <h2>3. Exploit Steps</h2>
      <ol>
        <li>Obtain the public key (frequently accessible under <code>/.well-known/jwks.json</code> or extracted from a public SSL certificate).</li>
        <li>Generate a new forged JWT payload with admin claims: <code>{"role": "admin", "user": "root"}</code>.</li>
        <li>Sign the forged JWT using HMAC-SHA256, utilizing the server's public key as the secret signature key.</li>
        <li>Submit the request to the administrative console.</li>
      </ol>

      <h2>4. Resolution</h2>
      <p>The server accepted the forged token and granted full administrative access. The report was triaged on HackerOne, marked as critical, and resolved with a prompt hotfix enforcing asymmetric key verification checks.</p>
    `
  },
  'js-recon-api': {
    filename: 'js-recon-api.md',
    title: 'The power of JS analysis in API security assessment',
    content: `
      <h2>1. Overview</h2>
      <p>Modern Single Page Applications (SPAs) often leak routing details, development environments, and hidden API endpoints in their minified client-side JavaScript bundle files. This post outlines my automation pipeline for target recon.</p>

      <h2>2. Harvesting API endpoints</h2>
      <p>When assessing a target, I download all active JS assets and run them through parsing filters. Here is my custom command line regex pattern for identifying REST endpoints:</p>
      
      <div class="modal-terminal-log">
$ cat webpack-chunk.js | grep -oE "https?://[a-zA-Z0-9./?=&_-]+" | sort -u</div>

      <p>Additionally, using JS beautifiers and link extractors like <code>LinkFinder</code> helps reveal endpoint paths such as <code>/api/v2/debug/db-console</code> or <code>/api/admin/internal-export</code> that are not linked in the main UI but are defined in the router config.</p>

      <h2>3. Code Analysis Snippet</h2>
      <p>Below is an example of an exposed development endpoint found within a minified chunk:</p>
      <div class="modal-terminal-log">
// Webpack chunk extract
const devConfig = {
  endpoint: "https://staging.internal-api.target.com",
  bypassHeaders: {
    "X-Dev-Mode": "authorized-bypass-token-1337"
  }
};</div>

      <h2>4. Key Takeaways</h2>
      <ul>
        <li>Never store API keys or bypass headers in frontend client code.</li>
        <li>Ensure build processes strip source maps and debug options before deploying production bundles.</li>
        <li>Audit your frontend bundles using automated static analysis tools regularly.</li>
      </ul>
    `
  }
};

(function () {
  const modal = document.getElementById('blog-modal');
  if (!modal) return;

  const closeDot = document.getElementById('modal-close-dot');
  const closeBtn = document.getElementById('modal-close-btn');
  const backdrop = document.getElementById('modal-backdrop');
  const typedCmd = document.getElementById('modal-typed-cmd');
  const content  = document.getElementById('modal-content');
  const termTitle = document.getElementById('modal-terminal-title');

  let typeInterval = null;

  const openModal = (postId) => {
    const post = BLOG_POSTS[postId];
    if (!post) return;

    // Reset previous modal state
    if (typeInterval) clearInterval(typeInterval);
    typedCmd.textContent = '';
    content.innerHTML = '';
    content.classList.remove('visible');
    termTitle.textContent = `less — blog/writeups/${post.filename}`;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Type command animation
    const cmdStr = `cat blog/writeups/${post.filename}`;
    let charIdx = 0;
    typeInterval = setInterval(() => {
      if (charIdx < cmdStr.length) {
        typedCmd.textContent += cmdStr[charIdx];
        charIdx++;
      } else {
        clearInterval(typeInterval);
        typeInterval = null;
        // Reveal content
        setTimeout(() => {
          content.innerHTML = post.content;
          content.classList.add('visible');
        }, 150);
      }
    }, 25);
  };

  const closeModal = () => {
    if (typeInterval) {
      clearInterval(typeInterval);
      typeInterval = null;
    }
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Add click listeners to blog cards
  document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => {
      const postId = card.dataset.postId;
      openModal(postId);
    });
    // Keyboard support
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.postId);
      }
    });
  });

  [closeDot, closeBtn, backdrop].forEach(el => {
    if (el) el.addEventListener('click', closeModal);
  });

  if (closeDot) {
    closeDot.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
})();
