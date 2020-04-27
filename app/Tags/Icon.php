<?php

namespace App\Tags;

use Statamic\Tags\Tags;

class Icon extends Tags
{
    /**
     * The {{ icon }} tag.
     *
     * @return string|array
     */
    public function wildcard($tag)
    {
        $icon = $this->get('src', $tag);

        return '/icons/' . $this->iconWithExtension($icon);
    }

    protected function iconWithExtension($icon)
    {
        return $icon . '.svg';
    }
}
