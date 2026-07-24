---
layout: page
title: Resume
permalink: /resume/
description: Saurav Kumar's professional resume.
toc: false
---

{% assign resume_path = '/assets/pdf/Saurav_Kumar_Resume.pdf' | relative_url %}

<div class="resume-actions" role="group" aria-label="Resume actions">
  <a class="btn btn-primary" href="{{ resume_path }}" target="_blank" rel="noopener">
    <i class="fas fa-up-right-from-square" aria-hidden="true"></i>
    Open PDF
  </a>
  <a class="btn btn-outline-primary" href="{{ resume_path }}" download>
    <i class="fas fa-download" aria-hidden="true"></i>
    Download PDF
  </a>
</div>

<iframe
  class="resume-viewer"
  src="{{ resume_path }}#view=FitH"
  title="Saurav Kumar - AI and Software Engineering resume"
>
  <p>
    Your browser cannot display this PDF.
    <a href="{{ resume_path }}">Open the resume instead.</a>
  </p>
</iframe>

<style>
  .resume-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .resume-actions .btn {
    align-items: center;
    display: inline-flex;
    gap: 0.45rem;
  }

  .resume-viewer {
    background: #fff;
    border: 1px solid var(--main-border-color);
    border-radius: 0.5rem;
    height: min(1100px, 82vh);
    min-height: 640px;
    width: 100%;
  }

  @media (max-width: 576px) {
    .resume-actions .btn {
      flex: 1 1 auto;
      justify-content: center;
    }

    .resume-viewer {
      height: 72vh;
      min-height: 480px;
    }
  }
</style>
