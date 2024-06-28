import React, { useState, useEffect } from 'react';
import $ from 'jquery'; // Import jQuery for Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript bundle
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import WOW from 'wowjs'; // Import WOW library

// Define the MainMenu component
function MainMenu() {
  // Initialize state variables
  const [grid, setGrid] = useState(null);

  // Use useEffect to initialize components
  useEffect(() => {
    // Initialize nice select
    $('.vg-select').niceSelect();

    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Initialize WOW animations
    new WOW().init();

    // Initialize Isotope grid
    const $grid = $('.gridder').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
    });
    setGrid($grid);

    // Filter items on button click
    $('.filterable-button').on('click', 'button', function() {
      const filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    // Initialize Owl Carousel
    $('.testi-carousel').owlCarousel({
      margin: 0,
      loop: true,
      autoplay: true,
      dots: false,
      autoplayTimeout: 4000,
      items: 1,
    });

    // Toggle menu
    $('.toggle-menu').click(function() {
      $('.minibar').slideToggle();
    });
  }, []);

  // Render the component
  return (
    <div>
      {/* Your component markup here */}
    </div>
  );
}

export default MainMenu;