<?php namespace Interact\Banners\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateInteractBanners extends Migration
{
    public function up()
    {
        Schema::create('interact_banners_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name');
            $table->text('description')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('interact_banners_');
    }
}
