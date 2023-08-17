<?php

namespace app\controllers;

use app\models\Pais;
use yii\rest\Controller;
use yii\web\Response;

class ApiController extends Controller
{


	public function actionIndex()
	{
		\Yii::$app->response->format = Response::FORMAT_JSON;
//		return Pais::find()->all();
		return ['message' => 'Cuuuuuuuuuuuu'];
	}

	// Mais ações da sua API podem ser adicionadas aqui
}
