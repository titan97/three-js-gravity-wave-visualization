<!-- PROJECT LOGO -->
<p align="center">
  <img src="gravitywave.gif" alt="animated" />
</p>

<h3 align="center">Gravity Wave Visualization</h3>

  <p align="center">
    Novel 3d gravity wave visualization using threejs library
    <br />
    <br />
    <a href="https://main--tiny-tarsier-619aba.netlify.app/">View Demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

This project was inspired by this post by Jeff Bryant on Wolfram Alpha coummunity ([gravity wave post](https://community.wolfram.com/groups/-/m/t/790989))
The idea was to use and modify the wave formula with threejs and javascript for a more immersive browser experience of the simulated gravity wave. The implementation involves a large 2d array of 3 dimensional points on a flat plane and the wave animation is just calculating where each point should be at some time step, t according to the equation model.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* ![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the development environment
   ```sh
   npm run dev
   ```
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

The main part of this model involves the following equation, where z is equal to:

![](https://github.com/titan97/three-js-gravity-wave-visualization/blob/main/gravitywave_modelequation.png)

160 is the initially set amplitude of the waves which can be adjusted as well as count and the other scalar values. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Thao Ngo

Project Link: [https://github.com/titan97/three-js-gravity-wave-visualization](https://github.com/titan97/three-js-gravity-wave-visualization)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Jeff Byrant](https://community.wolfram.com/groups/-/m/t/790989)
* [Alvan Caleb Arulandu - @arulandu](https://www.youtube.com/watch?v=wRmeFtRkF-8&t=601s)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
