<?php 

require __DIR__.'/../vendor/autoload.php';

use Symfony\Component\HttpFoundation as Http;

// Application configuration
$app = new Silex\Application([
    'debug'     => true,
    'path.root' => __DIR__,
    'path.app'  => realpath(__DIR__.'/../app'),
]);

$app->register(new Silex\Provider\TwigServiceProvider(), array(
	'twig.path' => __DIR__.'/views',
));

$app->get('/', function () use ($app) {
	return $app->sendFile($app['path.app'].'/layout/index.html');
});

$app->get('/doc/:page', function ($page) use ($app) {
	
});

if (!defined('DONT_RUN_APP')) {
    $app->run();
}

return $app;