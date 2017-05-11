/* Algorithm */
db.algorithms.find().forEach(function(algorithm) {
  var updateFileLocation = [];
  if(algorithm.algorithmFileLocation) {
    algorithm.algorithmFileLocation.forEach(function(file) {
      updateFileLocation.push(file.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com"));
    })
  }
  algorithm.algorithmFileLocation = updateFileLocation;

  if(algorithm.algorithmLocationBasePath) {
    algorithm.algorithmLocationBasePath = algorithm.algorithmLocationBasePath.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }
  db.algorithms.save(algorithm);
})


/* MyVisualization */
db.myvisualizations.find().forEach(function(mv) {
  if(mv.transformationScriptLocation) {
    mv.transformationScriptLocation = mv.transformationScriptLocation.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }
  db.myvisualizations.save(mv);
})


/* Sample Messages */
db.samplemsgs.find().forEach(function(sm) {
  if(sm.messageFileLocation) {
    sm.messageFileLocation = sm.messageFileLocation.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }
  db.samplemsgs.save(sm);
})


/* Scripts */
db.scripts.find().forEach(function(script) {
  if(script.scriptFileLocation) {
    script.scriptFileLocation = script.scriptFileLocation.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }
  db.scripts.save(script);
})


/* Visualizations */
db.visualizations.find().forEach(function(visualization) {
  var updateFileLocation = [];
  if(visualization.dependentFiles) {
    visualization.dependentFiles.forEach(function(file) {
      updateFileLocation.push(file.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com"));
    })
  }
  visualization.dependentFiles = updateFileLocation;

  if(visualization.thumbnail) {
    visualization.thumbnail = visualization.thumbnail.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }
  if(visualization.jsCode) {
    visualization.jsCode = visualization.jsCode.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }
  if(visualization.visualizationLocationBasePath) {
    visualization.visualizationLocationBasePath = visualization.visualizationLocationBasePath.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }

  db.visualizations.save(visualization);
})


/* Widgets */
db.widgets.find().forEach(function(widget) {
  var updateFileLocation = [];
  if(widget.dependentFiles) {
    widget.dependentFiles.forEach(function(file) {
      updateFileLocation.push(file.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com"));
    })
  }
  widget.dependentFiles = updateFileLocation;

  var updatecssFile = [];
  if(widget.cssFiles) {
    widget.cssFiles.forEach(function(file) {
      updatecssFile.push(file.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com"));
    })
  }
  widget.cssFiles = updatecssFile;

  var updateImageFile = [];
  if(widget.imageFiles) {
    widget.imageFiles.forEach(function(file) {
      updateImageFile.push(file.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com"));
    })
  }
  widget.imageFiles = updateImageFile;

  var updateDataFile = [];
  if(widget.dataFiles) {
    widget.dataFiles.forEach(function(file) {
      updateDataFile.push(file.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com"));
    })
  }
  widget.dataFiles = updateDataFile;

  if(widget.thumbnail) {
    widget.thumbnail = widget.thumbnail.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }
  if(widget.controllerFile) {
    widget.controllerFile = widget.controllerFile.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }
  if(widget.widgetLocationBasePath) {
    widget.widgetLocationBasePath = widget.widgetLocationBasePath.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }

  db.widgets.save(widget);
})


/* SharedLib */
db.sharedlibs.find().forEach(function(lib) {
  var updateFileLocation = [];
  if(lib.libChain) {
    lib.libChain.forEach(function(file) {
      updateFileLocation.push(file.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com"));
    })
  }
  lib.libChain = updateFileLocation;

  var updatecssFile = [];
  if(lib.cssFiles) {
    lib.cssFiles.forEach(function(file) {
      updatecssFile.push(file.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com"));
    })
  }
  lib.cssFiles = updatecssFile;

  var updatejsFile = [];
  if(lib.jsFiles) {
    lib.jsFiles.forEach(function(file) {
      updatejsFile.push(file.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com"));
    })
  }
  lib.jsFiles = updatejsFile;

  if(lib.sharedLibLocationBasePath) {
    lib.sharedLibLocationBasePath = lib.sharedLibLocationBasePath.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }

  db.sharedlibs.save(lib);
})


/* Project */
db.projects.find().forEach(function(project) {
  var updateFileLocation = [];
  if(project.dependentFiles) {
    project.dependentFiles.forEach(function(file) {
      updateFileLocation.push(file.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com"));
    })
  }
  project.dependentFiles = updateFileLocation;

  var updateImageFile = [];
  if(project.imageFiles) {
    project.imageFiles.forEach(function(file) {
      updateImageFile.push(file.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com"));
    })
  }
  project.imageFiles = updateImageFile;

  var updateDataFile = [];
  if(project.dataFiles) {
    project.dataFiles.forEach(function(file) {
      updateDataFile.push(file.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com"));
    })
  }
  project.dataFiles = updateDataFile;

  var updatejsFile = [];
  if(project.jsFiles) {
    project.jsFiles.forEach(function(file) {
      updatejsFile.push(file.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com"));
    })
  }
  project.jsFiles = updatejsFile;

  if(project.thumbnail) {
    project.thumbnail = project.thumbnail.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }
  if(project.cssFile) {
    project.cssFile = project.cssFile.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }
  if(project.globalsFile) {
    project.globalsFile = project.globalsFile.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }
  if(project.projectLocationBasePath) {
    project.projectLocationBasePath = project.projectLocationBasePath.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }

  db.projects.save(project);
})


/* Experiences */
db.experiences.find().forEach(function(exp) {
  if(exp.logo) {
    exp.logo = exp.logo.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }
  db.experiences.save(exp);
})


/* Experiences */
db.apps.find().forEach(function(app) {
  var screenshots = [];
  if(app.screenshots) {
    app.screenshots.forEach(function(screenshot) {
      screenshots.push(screenshot.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com"));
    })
  }
  app.screenshots = screenshots;
  if(app.logo) {
    app.logo = app.logo.replace("vegademo.cloudapp.net", "vega1nodeweb.centralindia.cloudapp.azure.com");
  }
  db.apps.save(app);
})
