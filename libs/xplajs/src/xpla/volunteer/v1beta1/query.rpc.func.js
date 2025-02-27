"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetVolunteerValidators = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const query_1 = require("./query");
const createGetVolunteerValidators = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryVolunteerValidatorsRequest.encode,
    decode: query_1.QueryVolunteerValidatorsResponse.decode,
    service: "xpla.volunteer.v1beta1.Query",
    method: "VolunteerValidators",
    clientResolver
});
exports.createGetVolunteerValidators = createGetVolunteerValidators;
