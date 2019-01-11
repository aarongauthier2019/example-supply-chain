[{
    "_id": "_fn$authOrgType",
    "name": "authOrgType",
    "code": "(get-all (authOrganizationType) [\"organization/_auth\" \"organization/type\" \"_tag/id\"])"
},
{
    "_id": "_fn$orgType",
    "name": "orgType",
    "code": "(get-all (organizationType) [\"organization/type\" \"_tag/id\"])"
},
{
    "_id": "_fn$orgAuth",
    "name": "orgAuth",
    "code": "(get-all (organizationAuth) [\"organization/auth\" \"_id\"])"
},
{
    "_id": "_fn$senderApprovedPO",
    "name": "senderApprovedPO",
    "code": "(contains? (shipmentPOApproved) (shipmentSentBy))"
},
{
    "_id": "_fn$cafeApprovedPO?",
    "name": "cafeApprovedPO?",
    "code": "(contains? (approvedOrgTypes) \"organization/type:cafe\")"
},
{
    "_id": "_fn$growerApprovedPO?",
    "name": "growerApprovedPO?",
    "code": "(contains? (approvedOrgTypes) \"organization/type:grower\")"
},
{
    "_id": "_fn$roasterApprovedPO?",
    "name": "roasterApprovedPO?",
    "code": "(contains? (approvedOrgTypes) \"organization/type:roaster\")"
},
{
    "_id": "_fn$receivedSignatureIsSelf",
    "name": "didAuthRecieveShipment?",
    "code": "(contains? (purchaseOrderReceivedSignaturesAuth) (?auth_id))"
}]
