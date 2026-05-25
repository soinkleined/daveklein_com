---
layout: page
title: "Blog"
permalink: /blog/
---

<div class="container py-5">
    <div class="row mb-4">
        <div class="col text-center">
            <button class="btn btn-outline-primary active filter-btn" data-filter="all">All</button>
            {% assign all_categories = site.posts | map: "categories" | flatten | uniq | sort %}
            {% for category in all_categories %}
                <button class="btn btn-outline-primary filter-btn" data-filter="{{ category | slugify }}">{{ category }}</button>
            {% endfor %}
        </div>
    </div>
    <div class="row" id="blog-posts">
        {% for post in site.posts %}
            <div class="col-lg-10 offset-lg-1 post-item" data-categories="{{ post.categories | join: ' ' | slugify }}">
                <div class="row mb-5 align-items-start">
                    <div class="col-md-4">
                        <a href="{{ post.url | relative_url }}">
                            <img src="{{ post.image | default: '/img/portfolio/1.jpg' | relative_url }}" class="img-fluid rounded" alt="{{ post.title }}">
                        </a>
                    </div>
                    <div class="col-md-8">
                        <p class="text-muted mb-1">{{ post.date | date: "%B %d, %Y" }}</p>
                        <h2 class="mb-2"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
                        {% if post.categories %}
                            <div class="mb-3">
                                {% for category in post.categories %}
                                    <span class="badge bg-primary me-1">{{ category }}</span>
                                {% endfor %}
                            </div>
                        {% endif %}
                        <p>{{ post.description }}</p>
                    </div>
                </div>
            </div>
        {% endfor %}
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const posts = document.querySelectorAll('.post-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            posts.forEach(post => {
                if (filter === 'all' || post.getAttribute('data-categories').includes(filter)) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
});
</script>
