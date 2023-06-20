<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use App\Http\Resources\BoardResource;
use Illuminate\Http\Request;

class BoardController extends BaseController
{
    public function index (Request $request) {
        $boards = $request->user()->boards;

        return $this->sendResponse(BoardResource::collection($boards), 'Boards Received.');
    }

    public function show ($boardId, Request $request) {
        $board = $request->user()->boards()->find($boardId)->with('items')->get();

        return $this->sendResponse(BoardResource::collection($board), 'Board received.');
    }
}
