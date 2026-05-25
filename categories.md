---
layout: page
title: "Categories"
permalink: /categories/
---

{% for category in site.categories %}
  <h2 id="{{ category | first | slugify }}">{{ category | first }}</h2>
  <div class="row mb-5">
    {% for post in category.last %}
      <div class="col-lg-4 col-sm-6 mb-4">
          <a href="{{ post.url | relative_url }}" class="portfolio-box">
              <img src="{{ post.image | default: '/img/portfolio/1.jpg' | relative_url }}" class="img-fluid" alt="{{ post.title }}">
              <div class="portfolio-box-caption">
                  <div class="portfolio-box-caption-content">
                      <div class="project-name">{{ post.title }}</div>
                  </div>
              </div>
          </a>
      </div>
    {% endfor %}
  </div>
{% endfor %}
