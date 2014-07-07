Package.describe({
  summary: "A jquery special event plugin that makes the task of adding complex drag interactions, to any element, simple and powerful."
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('lib/jquery.event.drag-2.2.js', 'client');
});

