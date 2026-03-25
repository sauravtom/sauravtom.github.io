---
title: The Big Bet on World Models
date: 2025-11-14 +0530
image: /assets/img/posts/the-big-bet-on-world-models.png
categories: [AI, World Models, Computer Vision, Machine Learning]
tags: [AI, World Models, Fei-Fei Li, Yann LeCun, DeepMind, Spatial Intelligence, 3D Reconstruction, Gaussian Splatting, JEPA, AGI]
author: sauravtom
---

<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <defs>
    <linearGradient id="world-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3498DB; stop-opacity:0.9" />
      <stop offset="100%" style="stop-color:#2ECC71; stop-opacity:0.9" />
    </linearGradient>
    <linearGradient id="interface-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#E74C3C; stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#E67E22; stop-opacity:0.8" />
    </linearGradient>
    <linearGradient id="simulator-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#9B59B6; stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#8E44AD; stop-opacity:0.8" />
    </linearGradient>
    <linearGradient id="cognition-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1ABC9C; stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#16A085; stop-opacity:0.8" />
    </linearGradient>
  </defs>

  <style>
    .center-circle {
      fill: url(#world-gradient);
      stroke: #2980B9;
      stroke-width: 3;
    }
    .branch-circle {
      stroke-width: 2.5;
    }
    .interface-circle {
      fill: url(#interface-gradient);
      stroke: #C0392B;
    }
    .simulator-circle {
      fill: url(#simulator-gradient);
      stroke: #8E44AD;
    }
    .cognition-circle {
      fill: url(#cognition-gradient);
      stroke: #16A085;
    }
    .branch-line {
      stroke-width: 2.5;
      stroke-dasharray: 5,3;
    }
    .center-text {
      font-size: 18px;
      fill: white;
      font-weight: bold;
      text-anchor: middle;
      dominant-baseline: middle;
    }
    .label-text {
      font-size: 14px;
      fill: #34495E;
      font-weight: 600;
      text-anchor: middle;
    }
    .subtitle-text {
      font-size: 11px;
      fill: #7F8C8D;
      text-anchor: middle;
    }
    .icon-element {
      stroke-width: 2;
      fill: none;
    }
  </style>

  <!-- Center: World Models -->
  <circle class="center-circle" cx="400" cy="200" r="60" />
  <text class="center-text" x="400" y="195">WORLD</text>
  <text class="center-text" x="400" y="210">MODELS</text>

  <!-- Branch 1: Interface (top-left) -->
  <line class="branch-line" x1="360" y1="165" x2="150" y2="80" stroke="#E74C3C" />
  <circle class="branch-circle interface-circle" cx="150" cy="80" r="50" />
  <g transform="translate(150, 70)">
    <!-- 3D cube icon -->
    <path class="icon-element" stroke="white" d="M -15,-10 L 0,-18 L 15,-10 M -15,-10 L -15,10 M 15,-10 L 15,10 M -15,10 L 0,18 L 15,10 M 0,-18 L 0,2" />
  </g>
  <text class="center-text" x="150" y="95" style="font-size: 13px;">INTERFACE</text>
  <text class="label-text" x="150" y="145">Gaussian Splats</text>
  <text class="subtitle-text" x="150" y="160">3D Asset Generation</text>

  <!-- Branch 2: Simulator (top-right) -->
  <line class="branch-line" x1="440" y1="165" x2="650" y2="80" stroke="#9B59B6" />
  <circle class="branch-circle simulator-circle" cx="650" cy="80" r="50" />
  <g transform="translate(650, 70)">
    <!-- Game controller icon -->
    <rect class="icon-element" stroke="white" x="-18" y="-8" width="36" height="16" rx="4" />
    <circle stroke="white" fill="white" cx="-8" cy="0" r="2" />
    <circle stroke="white" fill="white" cx="8" cy="0" r="2" />
  </g>
  <text class="center-text" x="650" y="95" style="font-size: 13px;">SIMULATOR</text>
  <text class="label-text" x="650" y="145">Genie 3</text>
  <text class="subtitle-text" x="650" y="160">Training Environments</text>

  <!-- Branch 3: Cognition (bottom) -->
  <line class="branch-line" x1="400" y1="260" x2="400" y2="350" stroke="#1ABC9C" />
  <circle class="branch-circle cognition-circle" cx="400" cy="350" r="50" />
  <g transform="translate(400, 340)">
    <!-- Brain/network icon -->
    <circle class="icon-element" stroke="white" cx="-10" cy="-5" r="4" />
    <circle class="icon-element" stroke="white" cx="10" cy="-5" r="4" />
    <circle class="icon-element" stroke="white" cx="0" cy="8" r="4" />
    <line class="icon-element" stroke="white" x1="-10" y1="-5" x2="10" y2="-5" />
    <line class="icon-element" stroke="white" x1="-10" y1="-5" x2="0" y2="8" />
    <line class="icon-element" stroke="white" x1="10" y1="-5" x2="0" y2="8" />
  </g>
  <text class="center-text" x="400" y="365" style="font-size: 13px;">COGNITION</text>
  <text class="label-text" x="400" y="42">JEPA</text>
  <text class="subtitle-text" x="400" y="27">Internal Predictive State</text>
</svg>

AI has finally reached the "we need to model the whole world" phase. But here's the twist: the phrase "world model" now means three completely different things, depending on who's talking.

In the same season, Fei-Fei Li's World Labs shipped Marble, a "multimodal world model" that turns prompts into walkable 3D scenes in your browser. Reports emerged that Meta's chief AI scientist Yann LeCun is leaving to build a world-model startup of his own. And DeepMind is calling its new interactive video engine Genie 3 a world model as well.

Same phrase. Three fundamentally different bets on the future of AI.

## The Confusion Begins

If you've been following AI discourse lately, you might have noticed something odd: everyone's talking about "world models," but nobody seems to be building the same thing.

World Labs demos photorealistic 3D environments you can walk through in VR. LeCun gives talks about latent state spaces and predictive architectures. DeepMind shows off AI-generated ski slopes where agents can train. They're all betting big on "world models," yet their technical approaches have almost nothing in common.

This isn't just semantic drift. It's three distinct visions of what comes after large language models, each addressing different fundamental limitations of current AI systems.

## World Models as Interface: The Gaussian Splat Pipeline

Let's start with what you can actually click on today: Marble, from Fei-Fei Li's World Labs.

Marble takes text prompts, single images, short videos, or blocky 3D layouts and hallucinates a 3D representation of a scene. You can walk around that scene in a web or VR viewer, tweak it with an in-browser editor called Chisel, and export as Gaussian splats, standard meshes (OBJ/FBX), or flat video for downstream tools.

For anyone who builds VR apps or game levels, a pipeline that goes "prompt → 3D world → export to Unity" is incredibly useful. World Labs even ships its own Three.js renderer, Spark, specifically tuned for Gaussian splats.

But here's what it's not: it's not a system for machines to think with. It's a 3D asset generation pipeline—a very polished one, but fundamentally a tool for creating content that humans will consume.

### What Are Gaussian Splats, Anyway?

To understand the excitement (and the limitations), you need to know what a Gaussian splat actually is.

Traditional 3D graphics use **photogrammetry**: take hundreds of overlapping photos of a real thing, reconstruct a polygon mesh (a shell made of tiny triangles), and bake textures on top. Great if you want to measure, collide, or 3D-print, but labor-intensive.

**3D Gaussian splatting** is the new approach: represent the scene as millions of fuzzy colored blobs ("Gaussians") floating in space, and "splat" them onto the screen so they blend into an image. It's excellent at foliage, hair, and soft light, and runs in real time on gaming GPUs.

As one photogrammetry practitioner put it: "Use photogrammetry if you want to do something with the mesh itself, and Gaussian splatting if you want to skip all the steps and just show the scan like it is. It's kind of a shortcut to interactive photorealism."

Marble lives squarely in that world—a shortcut to interactive photorealism for human consumption.

### The Identity Crisis

Here's where it gets interesting: Fei-Fei Li's essay *From Words to Worlds: Spatial Intelligence Is AI's Next Frontier* speaks about "embodied agents," "commonsense physics," and "robots that can understand and act in the world."

But Marble, the actual product, is a 3D Gaussian splat viewer. The "world" it models is the part we can see and walk around in—not a system for robots to reason about physics or plan actions.

One Hacker News commenter captured the disconnect perfectly: "I work in AI and, to this day, I don't know what they mean by 'world' in 'world model'. Isn't this a Gaussian Splat model?"

Another was more blunt: "Taking images and turning them into 3D environments using gaussian splats, depth and inpainting. Cool, but that's a 3D GS pipeline, not a robot brain."

Ironically, Li's original manifesto never once mentions 3D Gaussian Splatting—the very technique at the heart of Marble's output pipeline.

## World Models as Cognition: The Brain in the Middle

Yann LeCun's use of "world model" comes from an entirely different tradition: control theory and cognitive science rather than 3D graphics.

In his 2022 paper *A Path Towards Autonomous Machine Intelligence*, LeCun describes a system where:

1. A world model ingests streams of sensory data
2. It learns **latent state**: compressed internal variables that capture "what's going on out there"
3. It learns to predict how that latent state will evolve when the agent (or environment) acts
4. A separate module uses that machinery to plan and choose actions

You never see the world model directly. It doesn't need to output pretty pictures. Its job is to let an agent think a few steps ahead without actually executing those actions in the real world.

**JEPA-style models**—"Joint Embedding Predictive Architectures"—are early instances of this approach. Instead of predicting raw pixels, they predict masked or future embeddings and are trained to be useful representations rather than perfect renderings.

### A Different Kind of Bet

When reports emerged that LeCun is leaving Meta to build a world-model startup, the Hacker News reaction wasn't "ooh, another 3D viewer." It was:

- Does this mean Meta has given up on this line of research in favor of GPT-style products?
- Can a JEPA-like architecture ever match LLMs in practical usefulness?
- Is there even a market for a world model that mostly lives in diagrams and robot labs?

Whether you think LeCun is right or wrong, you can't accuse him of chasing the same thing as World Labs. One "world model" is a front-end asset generator. The other is a back-end predictive brain.

## World Models as Simulator: DeepMind's Middle Ground

DeepMind's Genie 3 occupies a fascinating middle position. It's introduced as "a new frontier for world models," and from a text prompt, it generates an interactive video-like environment at 720p / 24 fps that you can move around in for several minutes.

Objects persist across frames. You can "prompt" world events ("it starts raining"). The whole thing functions as a tiny videogame rendered by a model instead of a traditional engine.

DeepMind frames it explicitly as a training ground: AI agents and robots can "train in virtual warehouses and ski slopes" before they touch the real world.

Where Marble generates assets and LeCun dreams of latents, Genie 3 produces **simulators**: online environments where you can act, observe consequences, and learn.

As one HN commenter put it: "Genie is on-the-fly generated video that responds to user inputs in real time. Marble is a static Gaussian splat asset you render in a game engine."

## The Real Innovation: Dreamer 4

Buried in the Hacker News discussion is perhaps the most exciting development: Danijar Hafner's Dreamer series, which represents what might be the most promising direction for world models yet.

In Dreamer 4, researchers trained an agent to play Minecraft with enough skill to obtain diamonds—**without ever playing the game at all**. Only by watching humans play.

Here's how: they first build a world model, then train the agent purely in scenarios imagined by the world model, requiring zero extra data or experience after the initial observation phase.

The implications are staggering. If you can generate training data from a world model, you don't need datasets "like the entire internet" for every new domain. The world model becomes a data synthesis engine.

Hafner just left DeepMind. The speculation is that he might join LeCun's startup. If that happens, we could see the cognitive architecture LeCun envisions combined with the practical training methodology Dreamer demonstrates.

## Three Bets, One Ambition

Put it all together and "world model" now covers at least three distinct ideas:

**World models as interface** (World Labs / Marble)
A beautiful way to go from words and flat media to 3D environments humans can edit and share. The "world" is whatever your Quest headset needs next.

**World models as simulator** (DeepMind / Genie 3)
Produce continuous, controllable video worlds where agents can try things, fail, and try again. The "world" is whatever keeps the game loop coherent.

**World models as cognition** (LeCun / JEPA)
Internal predictive state. The "world" lives inside an agent as latent variables and transition functions—a compact representation of "what's going on" that enables planning without execution.

## Why This Matters

Language models have hit a wall. Everyone can feel it, even if we don't all agree on exactly what the wall is made of.

LLMs are brilliant at next-token prediction but struggle with:
- True spatial reasoning
- Long-term planning
- Causal understanding
- Learning from observation without massive labeled datasets

World models—in all three flavors—represent different bets on what comes next:

- **World Labs** bets that spatial intelligence starts with giving humans better tools to create and manipulate 3D content, and that embodied AI will follow from there.

- **LeCun** bets that we need to go back to first principles: build systems that learn compressed representations of the world and use those representations to plan, not just respond.

- **DeepMind** bets that the key is simulation: give agents interactive environments to explore, and they'll learn world models as an emergent property.

## The Honest Assessment

If you look only at Marble's demo, it's tempting to say "world model" is just 3D Gaussian splatting with better PR.

If you only read LeCun's papers, it's tempting to believe language models were a historical detour and JEPA will save us all.

If you only read DeepMind's blog posts, it's simulated ski slopes all the way down.

The truth is they're all building different parts of the same vague ambition: give machines some structured way to think about the world, beyond next-token prediction.

One group starts from the rendering, one from the physics, one from the internal code. Until the jargon catches up, the safest move when you see a "world model" headline is to ask:

1. Is this a thing for humans to look at, a place for agents to train, or a box inside a diagram?
2. Does it output static assets, real-time frames, or mostly latent states?
3. If you knock over a virtual vase, does anything in the system remember for more than one frame?

If the answers are "for humans," "static assets," and "not really," you're looking at a very nice Gaussian splat viewer.

If they're "for agents," "real-time," and "yes, in latent space," then you might just be staring at the world model LeCun has been talking about—the one that, very inconveniently for demo culture, doesn't fit in a single tweetable GIF.

## What Happens Next

My prediction: within two years, we'll see a convergence.

The rendering pipeline (Marble-style) will become a commodity feature in game engines. The simulation layer (Genie-style) will become standard infrastructure for training embodied AI. And the cognitive architecture (LeCun-style) will power the actual decision-making of those agents.

The companies that figure out how to connect all three layers—human-facing interface, agent training simulation, and internal world representation—will build the next generation of AI systems.

Until then, every time you see "world models" in a headline, remember: you're not confused. The term genuinely means three different things, and the people using it are making three very different bets.

The fascinating part is that all three bets might be right.

---

*If you found this interesting, you might also enjoy my post on [how Product Management is evolving in the age of AI](/posts/how-product-management-is-evolving-in-the-age-of-ai/), which explores another case of fundamental role transformation driven by AI capabilities.*
