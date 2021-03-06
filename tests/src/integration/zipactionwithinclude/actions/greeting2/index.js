/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Return a simple greeting message for someone.
 *
 * @param name A person's name.
 * @param place Where the person is from.
 */


var common1 = require('./common/utils.js')
var common2 = require('./common/common1/utils.js')
var common3 = require('./common/common1/copyUtils.js')

function main(params) {
    var name = params.name || params.payload || 'stranger';
    var place = params.place || 'somewhere';
    var hello = common1.hello || common2.hello || common3.hello || 'Hello';
    return {payload:  hello + ', ' + name + ' from ' + place + '!'};
}
exports.main = main;

