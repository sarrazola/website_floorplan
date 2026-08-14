(function (document, window) {
  "use strict";

  var script = document.currentScript;
  var product = script && script.dataset.product;
  if (!product || window.Analytics) return;

  var projectKey = "phc_CC4uyZpkWdW5hWnNGVvAKbd2cBLQNpp2kMUQWLwvaAof";
  var apiHost = "https://us.i.posthog.com";
  var localHosts = /^(localhost|127(?:\.\d+){3}|0\.0\.0\.0|\[::1\])$/;
  var environment = localHosts.test(window.location.hostname) ? "development" : "production";
  var context = {
    product: product,
    source: "marketing_web",
    environment: environment,
  };

  function createPostHogStub() {
    if (window.posthog && window.posthog.__SV) return window.posthog;

    var queue = [];
    queue._i = [];
    queue.people = [];

    "capture register register_once unregister get_distinct_id opt_in_capturing opt_out_capturing has_opted_out_capturing"
      .split(" ")
      .forEach(function (method) {
        queue[method] = function () {
          queue.push([method].concat(Array.prototype.slice.call(arguments)));
        };
      });

    queue.init = function (key, options) {
      var loader = document.createElement("script");
      loader.type = "text/javascript";
      loader.crossOrigin = "anonymous";
      loader.async = true;
      loader.src = options.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") + "/static/array.js";
      document.head.appendChild(loader);
      queue._i.push([key, options]);
    };
    queue.__SV = 1;
    window.posthog = queue;
    return queue;
  }

  createPostHogStub();

  window.posthog.init(projectKey, {
    api_host: apiHost,
    defaults: "2026-05-30",
    person_profiles: "identified_only",
    capture_pageview: false,
    capture_pageleave: false,
    autocapture: false,
    disable_session_recording: true,
    respect_dnt: true,
  });
  window.posthog.register(context);

  function cleanUrl(value) {
    if (!value) return "";
    try {
      var url = new URL(value, window.location.origin);
      return url.origin + url.pathname;
    } catch {
      return "";
    }
  }

  function track(eventName, properties) {
    if (!/^[a-z][a-z0-9_]*$/.test(eventName)) return;
    window.posthog.capture(eventName, properties || {});
  }

  var lastPagePath = "";
  function pageView() {
    var pagePath = window.location.pathname;
    if (pagePath === lastPagePath) return;
    lastPagePath = pagePath;
    window.posthog.capture("$pageview", {
      $current_url: cleanUrl(window.location.href),
      $pathname: pagePath,
      $referrer: cleanUrl(document.referrer),
    });
  }

  function placementFor(element) {
    if (element.dataset.analyticsPlacement) return element.dataset.analyticsPlacement;
    if (element.closest("header")) return "header";
    if (element.closest("footer")) return "footer";
    if (element.closest("[id*='pricing'], [class*='pricing']")) return "pricing";
    if (element.closest("[id*='hero'], [class*='hero']")) return "hero";
    return "content";
  }

  function trackedClick(event) {
    var element = event.target.closest("a, button, [data-analytics-event]");
    if (!element) return;

    var explicitEvent = element.dataset.analyticsEvent;
    var properties = { placement: placementFor(element) };
    if (explicitEvent) {
      track(explicitEvent, properties);
      return;
    }

    var href = element.getAttribute("href");
    if (!href) return;

    var destination;
    try {
      destination = new URL(href, window.location.href);
    } catch {
      return;
    }

    if (/apps\.apple\.com$|itunes\.apple\.com$/.test(destination.hostname)) {
      properties.store = "apple_app_store";
      track("app_store_link_clicked", properties);
    } else if (destination.hostname === "play.google.com") {
      properties.store = "google_play";
      track("play_store_link_clicked", properties);
    } else if (destination.hostname.endsWith("lemonsqueezy.com") && destination.pathname.includes("/checkout")) {
      track("checkout_started", properties);
    } else if (destination.hostname === "app.ugcmade.com" && destination.pathname.startsWith("/register")) {
      track("signup_started", properties);
    } else if (element.hasAttribute("download") || /\/(download)(\/|$)/.test(destination.pathname)) {
      properties.method = "download";
      track("cta_clicked", properties);
    } else if (destination.protocol === "mailto:") {
      track("cta_clicked", properties);
    }
  }

  window.Analytics = Object.freeze({ track: track, pageView: pageView });
  pageView();
  document.addEventListener("click", trackedClick, true);
  window.addEventListener("popstate", pageView);

  ["pushState", "replaceState"].forEach(function (method) {
    var original = window.history[method];
    window.history[method] = function () {
      var result = original.apply(this, arguments);
      window.setTimeout(pageView, 0);
      return result;
    };
  });
})(document, window);
