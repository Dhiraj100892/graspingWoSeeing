<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <title>Dex-Net by BerkeleyAutomation</title>

    <link rel="stylesheet" href="stylesheets/styles.css">
    <link rel="stylesheet" href="stylesheets/github-light.css">
    <script src="javascripts/scale.fix.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <!--[if lt IE 9]>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-101589905-1', 'auto');
      ga('send', 'pageview');

    </script>
  </head>
  <body>
    <div class="wrapper">
      <header>
        <h1 class="header"><a href="https://berkeleyautomation.github.io/dex-net">Dex-Net</a></h1>
        <p class="header"></p>

        <h2 class="header">Publications</h2>
        <p class="header"></p>
        <ul>
          <li class="download"><a class="buttons" href="#dexnet_21">Bin Picking</a></li>
          <li class="download"><a class="buttons" href="#dexnet_3">Dex-Net 3.0</a></li>
          <li class="download"><a class="buttons" href="#dexnet_2">Dex-Net 2.0</a></li>
          <li class="download"><a class="buttons" href="#dexnet_1">Dex-Net 1.0</a></li>
        </ul>

        <h2 class="header">Code</h2>
        <p class="header"></p>
        <ul>
          <li class="download"><a class="buttons" href="https://github.com/BerkeleyAutomation/gqcnn">gqcnn</a></li>
          <li class="download"><a class="buttons" href="https://github.com/BerkeleyAutomation/dex-net">dex-net</a></li>
        </ul>

        <h2 class="header">Data</h2>
        <p class="header"></p>
        <ul>
          <li class="download"><a class="buttons" href="http://bit.ly/2rIM7Jk">Training Datasets</a></li>
          <li class="download"><a class="buttons" href="http://bit.ly/2tAFMko">Pretrained Models</a></li>
	  <li class="download"><a class="buttons" href="http://bit.ly/2tLnRrQ">Object Meshes</a></li>
          <li class="download"><a class="buttons" href="http://bit.ly/2vb3OCz">Grasp Databases</a></li>
        </ul>

        <p class="header">

      </header>

      <section>
      
      <html>
      <body>
      <iframe width="620" height="340" src="https://www.youtube.com/embed/i6K3GI2_EgU" frameborder="0" allowfullscreen></iframe>
      </body>
      </html>

      <p>
      The Dexterity Network (Dex-Net) is a research project including code, datasets, and algorithms for generating datasets of synthetic point clouds, robot parallel-jaw grasps and metrics of grasp robustness based on physics for thousands of 3D object models to train machine learning-based methods to plan robot grasps.
      The broader goal of the Dex-Net project is to develop highly reliable robot grasping across a wide variety of rigid objects such as tools, household items, packaged goods, and industrial parts.
      </p>
      <p>
      <a href="#dexnet_2">Dex-Net 2.0</a> is designed to generated training datasets to learn Grasp Quality Convolutional Neural Networks (GQ-CNN) models that predict the probability of success of candidate parallel-jaw grasps on objects from point clouds.
      GQ-CNNs may be useful for quickly planning grasps that can lift and transport a wide variety of objects a physical robot.
      <a href="#dexnet_21">Dex-Net 2.1</a> adds dynamic simulation with <a href="https://pypi.python.org/pypi/pybullet">pybullet</a> and extends the robust grasping model to the sequential task of bin picking.
      <a href="#dexnet_3">Dex-Net 3.0</a> adds support for suction-based end-effectors.
      <a href="#dexnet_1">Dex-Net 1.0</a> was designed for distributed robust grasp analysis in the Cloud across datasets of over 10,000 3D mesh models.
      </p>
      <p>
      The project was created by <a href="http://www.jeff-mahler.com">Jeff Mahler</a> and <a href="http://goldberg.berkeley.edu">Prof. Ken Goldberg</a> and is currently maintained by the <a href="http://autolab.berkeley.edu/">Berkeley AUTOLAB</a>.
      For more info, <a href="#contact">contact us</a>.      
      </p>

      <h2 class="header" id="links" ><font color="black">Project Links</font></h2>
      <p>

      <h3 class="header" id="links" ><font color="black">Datasets</font></h3>
      <ul>
      <li> <a href="http://bit.ly/2rIM7Jk">GQ-CNN Training Datasets</a> </li>
      <li> <a href="http://bit.ly/2tAFMko">Pre-trained GQ-CNN Models</a> </li>
      <li> <a href="http://bit.ly/2tLnRrQ">Object Mesh Dataset v1.1</a> </li>
      <li> <a href="http://bit.ly/2vb3OCz">HDF5 Database of 3D Objects, Parallel-Jaw Grasps for YuMi, and Robustness Metrics</a> </li>
      </ul>

      <h3 class="header" id="links" ><font color="black">Code</font></h3>
      <ul>
      <li> <a href="https://github.com/BerkeleyAutomation/gqcnn">GQ-CNN Python Training Code</a> (<a href="https://berkeleyautomation.github.io/gqcnn">Documentation</a>)</li>
      <li> <a href="https://github.com/BerkeleyAutomation/dex-net">Dex-Net Database Python API</a> (<a href="https://berkeleyautomation.github.io/dex-net/code.html">Documentation</a>)</li>
      </ul>

      <h3 class="header" id="links" ><font color="black">Other</font></h3>
      <ul>
      <li> <a href="http://bair.berkeley.edu/blog/2017/06/27/dexnet-2.0/">BAIR Blog Post</a> </li>
      <li> <a href="http://autolab.berkeley.edu">Berkeley AUTOLAB</a> </li>
      </ul>
      </p>

      <h2 class="header" id="links" ><font color="black">News Coverage</font></h2>
      <p>
      <ul>
      <li> <a href="https://www.nytimes.com/2017/09/10/business/warehouse-robots-learning.html">New York Times. Sept 10, 2017.</a> </li> 
      <li> <a href="http://www.bbc.com/news/av/technology-40409096/the-robot-that-can-pick-up-virtually-any-object">BBC. June 27, 2017.</a> </li> 
      <li> <a href="http://spectrum.ieee.org/automaton/robotics/robotics-software/uc-berkeley-releases-massive-dexnet-20-dataset">IEEE Spectrum. June 27, 2017.</a> </li>
      <li> <a href="https://www.wired.com/story/grasping-robot/">WIRED. June 19, 2017.</a> </li>
      <li> <a href="https://www.technologyreview.com/s/607931/meet-the-most-nimble-fingered-robot-yet/?utm_campaign=add_this&utm_source=twitter&utm_medium=post">MIT Technology Review. May 25, 2017.</a> </li>
      <li> <a href="https://www.fastcompany.com/3066863/robot-revolution/why-its-so-hard-for-robots-to-get-a-grip">Fast Company. Jan 12, 2017.</a> </li>
      </ul>
      </p>

      </section>

      <section>

      <h2 class="header" id="dexnet_21" ><font color="black">Learning Deep Policies for Robot Bin Picking by Simulating Robust Grasping Sequences</font></h2>
      <h4 class="header"><font color="black">Jeffrey Mahler, Ken Goldberg</font></h4>
      <h5 class="header"><font color="black"> To Appear at the First Conference on Robot Learning (CoRL) 2017 </b> </font></h5>
      <p>
      [<a href="https://github.com/BerkeleyAutomation/dex-net/raw/gh-pages/docs/dexnet_bin_picking_corl2017.pdf">Paper</a>]
      [<a href="https://github.com/BerkeleyAutomation/dex-net/raw/gh-pages/docs/dexnet_corl2017_supplement.pdf">Supplement</a>]
      [<a href="http://bit.ly/2ysvubx">Training Datasets</a>]
      [<a href="http://bit.ly/2tAFMko">Trained GQ-CNNs</a>]
      [<a href="http://bit.ly/2xQgGyX">Experiments</a>]
      [<a href="https://github.com/BerkeleyAutomation/dex-net/raw/gh-pages/docs/dexnet_corl2017.bib">Bibtex</a>]
      </p>

      <center>
      <div class="image">
      <img src="images/dexnet_bin_picking_teaser.png?raw=true" alt="Image cannot be displayed" width="90%">
      </div>
      </center>

      <h3>
      <a class="anchor" haria-hidden="true"><span class="octicon octicon-link"></span></a>Overview</h3>

      <p>
      Recent results suggest that it is possible to grasp a variety of singulated objects with high precision using Convolutional Neural Networks (CNNs)trained on synthetic data. This paper considers the task of bin picking, where multiple objects are randomly arranged in a heap and the objective is to sequentially grasp and transport each into a packing box. We model bin picking with a discrete-time Partially Observable Markov Decision Process that specifies states of the heap, point cloud observations, and rewards. We collect synthetic demonstrations of bin picking from an algorithmic supervisor uses full state information to optimize for the most robust collision-free grasp in a forward simulator based on pybullet to model dynamic object-object interactions and robust wrench space analysis from the Dexterity Network (Dex-Net) to model quasi-static contact between the gripper and object. We learn a policy by fine-tuning a Grasp Quality CNN on Dex-Net 2.1 to classify the supervisor's actions from a dataset of 10,000 rollouts of the supervisor in the simulator with noise injection. In 2,192 physical trials of bin picking with an ABB YuMi on a dataset of 50 novel objects, we find that the resulting policies can achieve 94% success rate and 96% average precision (very few false positives) on heaps of 5-10 objects and can clear heaps of 10 objects in under three minutes.
      </p>

      </section>

      <section>

      <h2 class="header" id="dexnet_3" ><font color="black">Dex-Net 3.0: Computing Robust Robot Suction Grasp Targets using a New Analytic Model and Deep Learning</font></h2>
      <h4 class="header"><font color="black">Jeffrey Mahler, Matthew Matl, Xinyu Liu, Albert Li, David Gealy, Ken Goldberg</font></h4>
      <h5 class="header"><font color="black"> Submitted to <b> ICRA 2018 </b> </font></h5>
      <p>
      [<a href="https://github.com/BerkeleyAutomation/dex-net/raw/gh-pages/docs/dexnet_icra2018_final.pdf">Paper</a>]
      [<a href="https://github.com/BerkeleyAutomation/dex-net/raw/gh-pages/docs/dexnet_icra2018_supplement.pdf">Supplement</a>]
      [<a href="https://arxiv.org/abs/1709.06670">Extended Version (arXiv)</a>]
      [<a href="http://bit.ly/2fMjgjh">Dataset</a>]
      [<a href="http://bit.ly/2xwlKde">Pretrained GQ-CNN</a>]
      [<a href="http://bit.ly/2yCqK02">Experiments</a>]
      [<a href="https://youtu.be/YtxeA4a74H4">Video: Model</a>]
      [<a href="https://youtu.be/8VuPnvF6yIs">Video: YuMi</a>]
      [<a href="https://github.com/BerkeleyAutomation/dex-net/raw/gh-pages/docs/dexnet_icra2018.bib">Bibtex</a>]
      </p>

      <center>
      <div class="image">
      <img src="images/dexnet_3_teaser.png?raw=true" alt="Image cannot be displayed" width="60%">
      </div>
      </center>

      <h3>
      <a class="anchor" haria-hidden="true"><span class="octicon octicon-link"></span></a>Overview</h3>

      <p>
      Suction-based end effectors are widely used in industry and are often preferred over parallel-jaw and multifinger grippers due to their ability to lift objects with a single point of contact. This ability simplifies planning, and hand-coded heuristics such as targeting planar surfaces are often used to select suction grasps based on point cloud data. In this paper, we propose a compliant suction contact model that computes the quality of the seal between the suction cup and target object and determines whether or not the suction grasp can resist an external wrench (e.g. gravity) on the object. To evaluate a grasp, we measure robustness to perturbations in end-effector and object pose, material properties, and external wrenches. We use this model to generate Dex-Net 3.0, a dataset of 2.8 million point clouds, suction grasps, and grasp robustness labels computed with 1,500 3D object models and we train a Grasp Quality Convolutional Neural Network (GQ-CNN) on this dataset to classify suction grasp robustness from point clouds. We evaluate the resulting system in 375 physical trials on an ABB YuMi fitted with a pneumatic suction gripper. When the object shape, pose, and mass properties are known, the model achieves 99% precision on a dataset of objects with Adversarial geometry such as sharply curved surfaces. Furthermore, a GQ-CNN-based policy trained on Dex-Net 3.0 achieves 99% and 97% precision respectively on a dataset of Basic and Typical objects.
      </p>

      </section>

      <section>

      <h2 class="header" id="dexnet_2" ><font color="black">Dex-Net 2.0: Deep Learning to Plan Robust Grasps with Synthetic Point Clouds and Analytic Grasp Metrics</font></h2>
      <h4 class="header"><font color="black">Jeff Mahler, Jacky Liang, Sherdil Niyaz, Michael Laskey, Richard Doan, Xinyu Liu, Juan Ojea, Ken Goldberg</font></h4>
      <h5 class="header"><font color="black"> RSS 2017 </b> </font></h5>
      <p>
      [<a href="https://github.com/BerkeleyAutomation/dex-net/raw/gh-pages/docs/dexnet_rss2017_final.pdf">Paper</a>]
      [<a href="https://github.com/BerkeleyAutomation/dex-net/raw/gh-pages/docs/dexnet_rss2017_supplement.pdf">Supplement</a>]
      [<a href="https://arxiv.org/abs/1703.09312">Extended Version (arXiv)</a>]
      [<a href="https://github.com/BerkeleyAutomation/dex-net/raw/gh-pages/docs/dexnet_icra2017_lecom_workshop_abstract.pdf">ICRA 2017 LECOM Workshop Abstract</a>]
      [<a href="https://github.com/BerkeleyAutomation/gqcnn">Code</a>]
      [<a href="http://bit.ly/2rIM7Jk">Datasets</a>]
      [<a href="http://bit.ly/2tAFMko">Pretrained GQ-CNN</a>]
      [<a href="https://www.youtube.com/watch?v=i6K3GI2_EgU">Video</a>]
      [<a href="https://github.com/BerkeleyAutomation/dex-net/raw/gh-pages/docs/dexnet_rss2017.bib">Bibtex</a>]
      </p>

      <center>
      <div class="image">
      <img src="images/dexnet_2_teaser.png?raw=true" alt="Image cannot be displayed" width="90%">
      </div>
      </center>

      <h3>
      <a class="anchor" haria-hidden="true"><span class="octicon octicon-link"></span></a>Overview</h3>

      <p>
      To reduce data collection time for deep learning of robust robotic grasp plans, we explore training from a synthetic dataset of 6.7 million point clouds, grasps, and robust analytic grasp metrics generated from thousands of 3D models from Dex-Net 1.0 in randomized poses on a table.
      We use the resulting dataset, Dex-Net 2.0, to train a Grasp Quality Convolutional Neural Network (GQ-CNN) model that rapidly predicts the probability of success of grasps from depth images, where grasps are specified as the planar position, angle, and depth of a gripper relative to an RGB-D sensor.
      Experiments with over 1,000 trials on an ABB YuMi comparing grasp planning methods on singulated objects suggest that a GQ-CNN trained  with only synthetic data from Dex-Net 2.0 can be used to plan grasps in 0.8s with a success rate of 93% on eight known objects with adversarial geometry and is 3x faster than registering point clouds to a precomputed dataset of objects and indexing grasps.
      The GQ-CNN is also the highest performing method on a dataset of ten novel household objects, with zero false positives out of 29 grasps classified as robust (100% precision) and a 1.5x higher success rate than a registration-based method.
      </p>

      <h3>
      <a id="codeanddata" class="anchor" href="#codeanddata" aria-hidden="true"><span class="octicon octicon-link"></span></a>Code and Data</h3>

      <p>
      We are planning on releasing the code and dataset for this project over summer 2017 with the following tentative release dates:
      <ul>
      <li> <span style="font-weight:bold"> GQ-CNN Package: </span> <span style="font-style:italic">  June 20, 2017. </span> Dex-Net 2.0 GQ-CNN training dataset with 6.7 million datapoints and ROS integration. The gqcnn package is now available at <a href="https://github.com/BerkeleyAutomation/gqcnn">https://github.com/BerkeleyAutomation/gqcnn</a> with an example ROS service for grasp planning.
      <li> <span style="font-weight:bold"> Dex-Net Object Mesh Dataset v1.1: </span> <span style="font-style:italic"> July 12, 2017. </span> The subset of 1,500 3D object models from Dex-Net 1.0 used in the RSS paper, labeled with parallel-Jaw grasps for the ABB YuMi. The dataset and dex-net Python API for manipulating the dataset are now available <a href="https://github.com/BerkeleyAutomation/dex-net/code.html">here</a>.
      <li> <span style="font-weight:bold"> Dex-Net as a Service: </span> <span style="font-style:italic"> Fall 2017. </span>  HTTP web API to create new databases with custom 3D models and compute grasp robustness metrics.
      </ul>
      </p>

      </section>
      
      <section>

      <h2 class="header" id="dexnet_1"><font color="black">Dex-Net 1.0: A Cloud-Based Network of 3D Objects for Robust Grasp Planning Using a Multi-Armed Bandit Model with Correlated Rewards</font></h2>
      <h4 class="header"><font color="black">Jeff Mahler, Florian Pokorny, Brian Hou, Melrose Roderick, Michael Laskey, Mathieu Aubry, Kai Kohlhoff, Torsten Kroeger, James Kuffner, Ken Goldberg</font></h4>
      <h5 class="header"><font color="black"> ICRA 2017 (Finalist, Best Manipulation Paper) </font></h5>
      <p>
      [<a href="https://github.com/BerkeleyAutomation/dex-net/raw/gh-pages/docs/dexnet_icra2016_final.pdf">Paper</a>]
      [<a href="https://github.com/BerkeleyAutomation/dex-net/raw/gh-pages/docs/dexnet_icra2016.bib">Bibtex</a>]
      </p>

      <center>
      <div class="image">
      <img src="https://github.com/BerkeleyAutomation/dex-net/raw/gh-pages/images/dexnet_teaser_website.png?raw=true" alt="Image cannot be displayed" width="90%">
      </div>
      </center>

      <h3>
      <a id="abstract" class="anchor" href="#abstract" aria-hidden="true"><span class="octicon octicon-link"></span></a>Overview</h3>

      <p>
      We present Dexterity Network 1.0 (Dex-Net), a new dataset and associated algorithm to study the scaling effects of Big Data and cloud computation on robust grasp planning. 
      The algorithm uses a Multi-Armed Bandit model with correlated rewards to leverage prior grasps and 3D object models in a growing dataset that currently includes over 10,000 unique 3D object models and 2.5 million parallel-jaw grasps.
      Each grasp includes an estimate of the probability of force closure under uncertainty in object and gripper pose and friction.
      Dex-Net 1.0 uses Multi-View Convolutional Neural Networks (MV-CNNs), a new deep learning method for 3D object classification, as a similarity metric between objects and the Google Cloud Platform to simultaneously run up to 1,500 virtual machines, reducing experiment runtime by three orders of magnitude.
      Experiments suggest that prior data can speed up robust grasp planning by a factor of up to 2 on average and that the quality of planned grasps increases with the number of similar objects in the dataset.
      We also study system sensitivity to varying similarity metrics and pose and friction uncertainty levels.
      </p>

      <h3>
      <a id="codeanddata" class="anchor" href="#codeanddata" aria-hidden="true"><span class="octicon octicon-link"></span></a>Code and Data</h3>

      <p>
      The code for this project can be found on <a href="https://github.com/jeffmahler/GPIS/tree/dev/src/grasp_selection">our github page</a>.
      This code is deprecated as of May 2017 and will be updated in the Dex-Net 2.0 codebase (see above).
      </p>
      </section>
      
      <section>

      <h2 class="header" id="contact"><font color="black">Contributors</font></h2>

      <p>This is an ongoing project at UC Berkeley with active contributions from:<br>
      <a href="http://www.jeff-mahler.com">Jeff Mahler</a>, Matt Matl, Bill DeRose, Jacky Liang, Alan Li, Vishal Satish, and <a href="http://goldberg.berkeley.edu">Ken Goldberg</a>.</p>

      <p>Past contributors include:<br>
      <a href="http://www.cs.berkeley.edu/~ftpokorny/">Florian Pokorny</a>, Brian Hou, Sherdil Niyaz, Xinyu Liu, Melrose Roderkick, <a href="http://imagine.enpc.fr/~aubrym/index.html">Mathieu Aubry</a>, Michael Laskey, Richard Doan, Brenton Chu, Raul Puri, Sahanna Suri, Nikhil Sharma, and Josh Price.</p>

      <h3>
      <a id="support-or-contact" class="anchor" href="#support-or-contact" aria-hidden="true"><span class="octicon octicon-link"></span></a>Support or Contact</h3>

      <p>Please Contact <a href="http://www.jeff-mahler.com">Jeff Mahler</a> (<a href="mailto:jmahler@berkeley.edu">email</a>) or <a href="goldberg.berkeley.edu">Prof. Ken Goldberg</a> (<a href="mailto:goldberg@berkeley.edu">email</a>) of the <a href="http://autolab.berkeley.edu/">AUTOLAB</a> at UC Berkeley.</p>
      </section>
    </div>
    <!--[if !IE]><script>fixScale(document);</script><![endif]-->
		
  </body>
</html>

