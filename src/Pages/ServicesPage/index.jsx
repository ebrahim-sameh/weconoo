import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ServicesBlock } from "../../Components";
// import { serviceimages } from "../../Components/assets";

import "./ServicesPage.scss";

const ServicesPage = () => {
  const { t } = useTranslation();
  const selectedService = useLocation()?.state?.id;
  useEffect(() => {
    if (!selectedService) {
      window.scrollTo({
        top: 0,
      });
    }
  }, [selectedService]);

  const services = [
    {
      img: "https://wecan200.s3.us-east-1.amazonaws.com/website/Website%20Edits/semo522_huge_machine_in_a_lab_furture_time_wood_manufacutre_dig_072222fd-9267-4770-a16a-2e2e357318a7.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIQDq%2BOA32GvUEORzH8JNTS91hdTMS%2FBxT5SzzhrL7taP2wIgJ6mEKd3T9sKHuDTt3yBii8sWymh5gh%2FlTX2IUBhdyX0q5AIIPRAAGgwxNDM1MTc4NTc1NzIiDE0SZxn%2BS%2FwCj0fiKirBAg5NjK29yWbPxr8xWyAQsO9WMUzAYKO%2FDARGEFSCIQsIaQLethEBzfSPs9SQ%2BEGqaWWHbynfUK7AfKDfxklJCGoA4n7ZqfORFoRkBypjuJzmvv0T%2F6EkX4SumusLJsKkHILlwj19idb0PJTX%2FgFsuHeV3YwZxNdZvw%2FzzUiPpnP47eRAUX0ol1sibf1srYh2KBOoQhzsX6FhdBIsggGRz5WYxkPsaELyI85q8Q7uGIXiq9aPqVp6h3Q8orFqrhDZ4ruyVpjJOSaJGorgJ5T9vMWHMXEHTO3uWB%2FiD5YXZ3nQONdDVVFnQSgfFi6H9eiX9EVBPBA3CL7v2ekmyaOngLi5hV4Zk4kFPr1VLfaQNzD7Iga1lj078X0FRpuvD9ejZDCllyxYc4x3a959KX5FQwJnqYt9eljWJX0yMa4WoAkxSTDcyLafBjqzAujN4R7u473Fb7UFDwjpmaKquNZSDQDqYseBQLsiTN6txEpeg6EGekuEFoBvpUIcU6Cb9YJlJOkFRf%2Bzll%2B1wrgccNr6TgHV%2FiEt4dmrQuV%2FwkQHnYoYN5a1RDlU6tHRPewimC2uLXkqNjGIUxozHm4ELG4uqe90YScy5PeP1065NCeoa6rkEZuPQq4WUVz9SroLXNZVbaVdr0xVYGeck5vJUn18xz%2BDV3LiLDlVtXlHY43L%2F0Qe3uLLP48YASacvxHmrR1mtrdt7RuA0tQ%2FT6VxMa8scJbjMtAtHL%2BaSkrZBAQl8VvU%2B1URllIrpXmja9gVlokWb%2BQLCSDi3P8Z4%2FAfw35kaVPTJRVXqe9C2T5aR84%2Bejs616G1bpuRhmR%2FXWTSgkQGAVwH0858n2Hi9I62j0E%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230216T034251Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASC2SUW4SBQWIIRBM%2F20230216%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=72b90db6122c86154faa3b3fb93410930928e4abef8a4c889e4af7d60771874c",
      title: `${t("services.service1__title")}`,
      text: `${t("services.service1__text")}`,
    },
    {
      img: "https://wecan200.s3.us-east-1.amazonaws.com/website/Website%20Edits/muslim-male-female-workshop-working-together.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIQDq%2BOA32GvUEORzH8JNTS91hdTMS%2FBxT5SzzhrL7taP2wIgJ6mEKd3T9sKHuDTt3yBii8sWymh5gh%2FlTX2IUBhdyX0q5AIIPRAAGgwxNDM1MTc4NTc1NzIiDE0SZxn%2BS%2FwCj0fiKirBAg5NjK29yWbPxr8xWyAQsO9WMUzAYKO%2FDARGEFSCIQsIaQLethEBzfSPs9SQ%2BEGqaWWHbynfUK7AfKDfxklJCGoA4n7ZqfORFoRkBypjuJzmvv0T%2F6EkX4SumusLJsKkHILlwj19idb0PJTX%2FgFsuHeV3YwZxNdZvw%2FzzUiPpnP47eRAUX0ol1sibf1srYh2KBOoQhzsX6FhdBIsggGRz5WYxkPsaELyI85q8Q7uGIXiq9aPqVp6h3Q8orFqrhDZ4ruyVpjJOSaJGorgJ5T9vMWHMXEHTO3uWB%2FiD5YXZ3nQONdDVVFnQSgfFi6H9eiX9EVBPBA3CL7v2ekmyaOngLi5hV4Zk4kFPr1VLfaQNzD7Iga1lj078X0FRpuvD9ejZDCllyxYc4x3a959KX5FQwJnqYt9eljWJX0yMa4WoAkxSTDcyLafBjqzAujN4R7u473Fb7UFDwjpmaKquNZSDQDqYseBQLsiTN6txEpeg6EGekuEFoBvpUIcU6Cb9YJlJOkFRf%2Bzll%2B1wrgccNr6TgHV%2FiEt4dmrQuV%2FwkQHnYoYN5a1RDlU6tHRPewimC2uLXkqNjGIUxozHm4ELG4uqe90YScy5PeP1065NCeoa6rkEZuPQq4WUVz9SroLXNZVbaVdr0xVYGeck5vJUn18xz%2BDV3LiLDlVtXlHY43L%2F0Qe3uLLP48YASacvxHmrR1mtrdt7RuA0tQ%2FT6VxMa8scJbjMtAtHL%2BaSkrZBAQl8VvU%2B1URllIrpXmja9gVlokWb%2BQLCSDi3P8Z4%2FAfw35kaVPTJRVXqe9C2T5aR84%2Bejs616G1bpuRhmR%2FXWTSgkQGAVwH0858n2Hi9I62j0E%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230216T034007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASC2SUW4SBQWIIRBM%2F20230216%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9b92d4a4744c0998443d82cbbb2ff1e61f10d59ce7c22d3bc812172a068f0f2e",
      title: `${t("services.service2__title")}`,
      text: `${t("services.service2__text")}`,
    },
    {
      img: "https://wecan200.s3.us-east-1.amazonaws.com/website/Website%20Edits/semo522_robot_machinen_manficaturing_wood_design_in_lab_science_61ddd3c3-b68a-4719-aafa-2c54fe587f72.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIQDq%2BOA32GvUEORzH8JNTS91hdTMS%2FBxT5SzzhrL7taP2wIgJ6mEKd3T9sKHuDTt3yBii8sWymh5gh%2FlTX2IUBhdyX0q5AIIPRAAGgwxNDM1MTc4NTc1NzIiDE0SZxn%2BS%2FwCj0fiKirBAg5NjK29yWbPxr8xWyAQsO9WMUzAYKO%2FDARGEFSCIQsIaQLethEBzfSPs9SQ%2BEGqaWWHbynfUK7AfKDfxklJCGoA4n7ZqfORFoRkBypjuJzmvv0T%2F6EkX4SumusLJsKkHILlwj19idb0PJTX%2FgFsuHeV3YwZxNdZvw%2FzzUiPpnP47eRAUX0ol1sibf1srYh2KBOoQhzsX6FhdBIsggGRz5WYxkPsaELyI85q8Q7uGIXiq9aPqVp6h3Q8orFqrhDZ4ruyVpjJOSaJGorgJ5T9vMWHMXEHTO3uWB%2FiD5YXZ3nQONdDVVFnQSgfFi6H9eiX9EVBPBA3CL7v2ekmyaOngLi5hV4Zk4kFPr1VLfaQNzD7Iga1lj078X0FRpuvD9ejZDCllyxYc4x3a959KX5FQwJnqYt9eljWJX0yMa4WoAkxSTDcyLafBjqzAujN4R7u473Fb7UFDwjpmaKquNZSDQDqYseBQLsiTN6txEpeg6EGekuEFoBvpUIcU6Cb9YJlJOkFRf%2Bzll%2B1wrgccNr6TgHV%2FiEt4dmrQuV%2FwkQHnYoYN5a1RDlU6tHRPewimC2uLXkqNjGIUxozHm4ELG4uqe90YScy5PeP1065NCeoa6rkEZuPQq4WUVz9SroLXNZVbaVdr0xVYGeck5vJUn18xz%2BDV3LiLDlVtXlHY43L%2F0Qe3uLLP48YASacvxHmrR1mtrdt7RuA0tQ%2FT6VxMa8scJbjMtAtHL%2BaSkrZBAQl8VvU%2B1URllIrpXmja9gVlokWb%2BQLCSDi3P8Z4%2FAfw35kaVPTJRVXqe9C2T5aR84%2Bejs616G1bpuRhmR%2FXWTSgkQGAVwH0858n2Hi9I62j0E%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230216T034327Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASC2SUW4SBQWIIRBM%2F20230216%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=53e345858e4d7c57f4eeff70f37cdbc37583a41130cc7e6c50cc042aa6a3c7cb",
      title: `${t("services.service3__title")}`,
      text: `${t("services.service3__text")}`,
    },
    {
      img: "https://wecan200.s3.us-east-1.amazonaws.com/website/Website%20Edits/production-line-wooden-floor-factory.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIQDq%2BOA32GvUEORzH8JNTS91hdTMS%2FBxT5SzzhrL7taP2wIgJ6mEKd3T9sKHuDTt3yBii8sWymh5gh%2FlTX2IUBhdyX0q5AIIPRAAGgwxNDM1MTc4NTc1NzIiDE0SZxn%2BS%2FwCj0fiKirBAg5NjK29yWbPxr8xWyAQsO9WMUzAYKO%2FDARGEFSCIQsIaQLethEBzfSPs9SQ%2BEGqaWWHbynfUK7AfKDfxklJCGoA4n7ZqfORFoRkBypjuJzmvv0T%2F6EkX4SumusLJsKkHILlwj19idb0PJTX%2FgFsuHeV3YwZxNdZvw%2FzzUiPpnP47eRAUX0ol1sibf1srYh2KBOoQhzsX6FhdBIsggGRz5WYxkPsaELyI85q8Q7uGIXiq9aPqVp6h3Q8orFqrhDZ4ruyVpjJOSaJGorgJ5T9vMWHMXEHTO3uWB%2FiD5YXZ3nQONdDVVFnQSgfFi6H9eiX9EVBPBA3CL7v2ekmyaOngLi5hV4Zk4kFPr1VLfaQNzD7Iga1lj078X0FRpuvD9ejZDCllyxYc4x3a959KX5FQwJnqYt9eljWJX0yMa4WoAkxSTDcyLafBjqzAujN4R7u473Fb7UFDwjpmaKquNZSDQDqYseBQLsiTN6txEpeg6EGekuEFoBvpUIcU6Cb9YJlJOkFRf%2Bzll%2B1wrgccNr6TgHV%2FiEt4dmrQuV%2FwkQHnYoYN5a1RDlU6tHRPewimC2uLXkqNjGIUxozHm4ELG4uqe90YScy5PeP1065NCeoa6rkEZuPQq4WUVz9SroLXNZVbaVdr0xVYGeck5vJUn18xz%2BDV3LiLDlVtXlHY43L%2F0Qe3uLLP48YASacvxHmrR1mtrdt7RuA0tQ%2FT6VxMa8scJbjMtAtHL%2BaSkrZBAQl8VvU%2B1URllIrpXmja9gVlokWb%2BQLCSDi3P8Z4%2FAfw35kaVPTJRVXqe9C2T5aR84%2Bejs616G1bpuRhmR%2FXWTSgkQGAVwH0858n2Hi9I62j0E%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230216T034126Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASC2SUW4SBQWIIRBM%2F20230216%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d2c4d3f544eb93971f5bf553bdb4f5cd1bbbe58fa7d750b9d1f6860d014afc7d",
      title: `${t("services.service4__title")}`,
      text: `${t("services.service4__text")}`,
    },
    {
      img: "https://wecan200.s3.us-east-1.amazonaws.com/website/Website%20Edits/modenr-carpenter-s-workshop-space-with-tools-machines.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIQDq%2BOA32GvUEORzH8JNTS91hdTMS%2FBxT5SzzhrL7taP2wIgJ6mEKd3T9sKHuDTt3yBii8sWymh5gh%2FlTX2IUBhdyX0q5AIIPRAAGgwxNDM1MTc4NTc1NzIiDE0SZxn%2BS%2FwCj0fiKirBAg5NjK29yWbPxr8xWyAQsO9WMUzAYKO%2FDARGEFSCIQsIaQLethEBzfSPs9SQ%2BEGqaWWHbynfUK7AfKDfxklJCGoA4n7ZqfORFoRkBypjuJzmvv0T%2F6EkX4SumusLJsKkHILlwj19idb0PJTX%2FgFsuHeV3YwZxNdZvw%2FzzUiPpnP47eRAUX0ol1sibf1srYh2KBOoQhzsX6FhdBIsggGRz5WYxkPsaELyI85q8Q7uGIXiq9aPqVp6h3Q8orFqrhDZ4ruyVpjJOSaJGorgJ5T9vMWHMXEHTO3uWB%2FiD5YXZ3nQONdDVVFnQSgfFi6H9eiX9EVBPBA3CL7v2ekmyaOngLi5hV4Zk4kFPr1VLfaQNzD7Iga1lj078X0FRpuvD9ejZDCllyxYc4x3a959KX5FQwJnqYt9eljWJX0yMa4WoAkxSTDcyLafBjqzAujN4R7u473Fb7UFDwjpmaKquNZSDQDqYseBQLsiTN6txEpeg6EGekuEFoBvpUIcU6Cb9YJlJOkFRf%2Bzll%2B1wrgccNr6TgHV%2FiEt4dmrQuV%2FwkQHnYoYN5a1RDlU6tHRPewimC2uLXkqNjGIUxozHm4ELG4uqe90YScy5PeP1065NCeoa6rkEZuPQq4WUVz9SroLXNZVbaVdr0xVYGeck5vJUn18xz%2BDV3LiLDlVtXlHY43L%2F0Qe3uLLP48YASacvxHmrR1mtrdt7RuA0tQ%2FT6VxMa8scJbjMtAtHL%2BaSkrZBAQl8VvU%2B1URllIrpXmja9gVlokWb%2BQLCSDi3P8Z4%2FAfw35kaVPTJRVXqe9C2T5aR84%2Bejs616G1bpuRhmR%2FXWTSgkQGAVwH0858n2Hi9I62j0E%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230216T033848Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIASC2SUW4SBQWIIRBM%2F20230216%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=953dc286ed06e3fbc40b95e755d9b226f95658e1f0aabb32c0819b58c5aa22e0",
      title: `${t("services.service5__title")}`,
      text: `${t("services.service5__text")}`,
    },
    {
      img: "https://wecan200.s3.us-east-1.amazonaws.com/website/Website%20Edits/family-photo-frame-photoframe-collage-multiframe-several-photos-machine-working-cnc.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIQDq%2BOA32GvUEORzH8JNTS91hdTMS%2FBxT5SzzhrL7taP2wIgJ6mEKd3T9sKHuDTt3yBii8sWymh5gh%2FlTX2IUBhdyX0q5AIIPRAAGgwxNDM1MTc4NTc1NzIiDE0SZxn%2BS%2FwCj0fiKirBAg5NjK29yWbPxr8xWyAQsO9WMUzAYKO%2FDARGEFSCIQsIaQLethEBzfSPs9SQ%2BEGqaWWHbynfUK7AfKDfxklJCGoA4n7ZqfORFoRkBypjuJzmvv0T%2F6EkX4SumusLJsKkHILlwj19idb0PJTX%2FgFsuHeV3YwZxNdZvw%2FzzUiPpnP47eRAUX0ol1sibf1srYh2KBOoQhzsX6FhdBIsggGRz5WYxkPsaELyI85q8Q7uGIXiq9aPqVp6h3Q8orFqrhDZ4ruyVpjJOSaJGorgJ5T9vMWHMXEHTO3uWB%2FiD5YXZ3nQONdDVVFnQSgfFi6H9eiX9EVBPBA3CL7v2ekmyaOngLi5hV4Zk4kFPr1VLfaQNzD7Iga1lj078X0FRpuvD9ejZDCllyxYc4x3a959KX5FQwJnqYt9eljWJX0yMa4WoAkxSTDcyLafBjqzAujN4R7u473Fb7UFDwjpmaKquNZSDQDqYseBQLsiTN6txEpeg6EGekuEFoBvpUIcU6Cb9YJlJOkFRf%2Bzll%2B1wrgccNr6TgHV%2FiEt4dmrQuV%2FwkQHnYoYN5a1RDlU6tHRPewimC2uLXkqNjGIUxozHm4ELG4uqe90YScy5PeP1065NCeoa6rkEZuPQq4WUVz9SroLXNZVbaVdr0xVYGeck5vJUn18xz%2BDV3LiLDlVtXlHY43L%2F0Qe3uLLP48YASacvxHmrR1mtrdt7RuA0tQ%2FT6VxMa8scJbjMtAtHL%2BaSkrZBAQl8VvU%2B1URllIrpXmja9gVlokWb%2BQLCSDi3P8Z4%2FAfw35kaVPTJRVXqe9C2T5aR84%2Bejs616G1bpuRhmR%2FXWTSgkQGAVwH0858n2Hi9I62j0E%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230216T033723Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASC2SUW4SBQWIIRBM%2F20230216%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=16201fb5b99276156834b314b9a1ac3e1d64a4baad08b7d4bf6aca75d2660186",
      title: `${t("services.service6__title")}`,
      text: `${t("services.service6__text")}`,
    },
    {
      img: "https://wecan200.s3.us-east-1.amazonaws.com/website/Website%20Edits/mortgage-broker-shows-home-floor-plan-clients.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIQDq%2BOA32GvUEORzH8JNTS91hdTMS%2FBxT5SzzhrL7taP2wIgJ6mEKd3T9sKHuDTt3yBii8sWymh5gh%2FlTX2IUBhdyX0q5AIIPRAAGgwxNDM1MTc4NTc1NzIiDE0SZxn%2BS%2FwCj0fiKirBAg5NjK29yWbPxr8xWyAQsO9WMUzAYKO%2FDARGEFSCIQsIaQLethEBzfSPs9SQ%2BEGqaWWHbynfUK7AfKDfxklJCGoA4n7ZqfORFoRkBypjuJzmvv0T%2F6EkX4SumusLJsKkHILlwj19idb0PJTX%2FgFsuHeV3YwZxNdZvw%2FzzUiPpnP47eRAUX0ol1sibf1srYh2KBOoQhzsX6FhdBIsggGRz5WYxkPsaELyI85q8Q7uGIXiq9aPqVp6h3Q8orFqrhDZ4ruyVpjJOSaJGorgJ5T9vMWHMXEHTO3uWB%2FiD5YXZ3nQONdDVVFnQSgfFi6H9eiX9EVBPBA3CL7v2ekmyaOngLi5hV4Zk4kFPr1VLfaQNzD7Iga1lj078X0FRpuvD9ejZDCllyxYc4x3a959KX5FQwJnqYt9eljWJX0yMa4WoAkxSTDcyLafBjqzAujN4R7u473Fb7UFDwjpmaKquNZSDQDqYseBQLsiTN6txEpeg6EGekuEFoBvpUIcU6Cb9YJlJOkFRf%2Bzll%2B1wrgccNr6TgHV%2FiEt4dmrQuV%2FwkQHnYoYN5a1RDlU6tHRPewimC2uLXkqNjGIUxozHm4ELG4uqe90YScy5PeP1065NCeoa6rkEZuPQq4WUVz9SroLXNZVbaVdr0xVYGeck5vJUn18xz%2BDV3LiLDlVtXlHY43L%2F0Qe3uLLP48YASacvxHmrR1mtrdt7RuA0tQ%2FT6VxMa8scJbjMtAtHL%2BaSkrZBAQl8VvU%2B1URllIrpXmja9gVlokWb%2BQLCSDi3P8Z4%2FAfw35kaVPTJRVXqe9C2T5aR84%2Bejs616G1bpuRhmR%2FXWTSgkQGAVwH0858n2Hi9I62j0E%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230216T033919Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASC2SUW4SBQWIIRBM%2F20230216%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=07e9549b048e99f07b5e3d219528fc565a1a1dcb4cc1f4fa9eb90582933e9fb3",
      title: `${t("services.service7__title")}`,
      text: `${t("services.service7__text")}`,
    },
    {
      img: "https://wecan200.s3.us-east-1.amazonaws.com/website/Website%20Edits/overview-contemporary-designers-bending-workplace.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIQDq%2BOA32GvUEORzH8JNTS91hdTMS%2FBxT5SzzhrL7taP2wIgJ6mEKd3T9sKHuDTt3yBii8sWymh5gh%2FlTX2IUBhdyX0q5AIIPRAAGgwxNDM1MTc4NTc1NzIiDE0SZxn%2BS%2FwCj0fiKirBAg5NjK29yWbPxr8xWyAQsO9WMUzAYKO%2FDARGEFSCIQsIaQLethEBzfSPs9SQ%2BEGqaWWHbynfUK7AfKDfxklJCGoA4n7ZqfORFoRkBypjuJzmvv0T%2F6EkX4SumusLJsKkHILlwj19idb0PJTX%2FgFsuHeV3YwZxNdZvw%2FzzUiPpnP47eRAUX0ol1sibf1srYh2KBOoQhzsX6FhdBIsggGRz5WYxkPsaELyI85q8Q7uGIXiq9aPqVp6h3Q8orFqrhDZ4ruyVpjJOSaJGorgJ5T9vMWHMXEHTO3uWB%2FiD5YXZ3nQONdDVVFnQSgfFi6H9eiX9EVBPBA3CL7v2ekmyaOngLi5hV4Zk4kFPr1VLfaQNzD7Iga1lj078X0FRpuvD9ejZDCllyxYc4x3a959KX5FQwJnqYt9eljWJX0yMa4WoAkxSTDcyLafBjqzAujN4R7u473Fb7UFDwjpmaKquNZSDQDqYseBQLsiTN6txEpeg6EGekuEFoBvpUIcU6Cb9YJlJOkFRf%2Bzll%2B1wrgccNr6TgHV%2FiEt4dmrQuV%2FwkQHnYoYN5a1RDlU6tHRPewimC2uLXkqNjGIUxozHm4ELG4uqe90YScy5PeP1065NCeoa6rkEZuPQq4WUVz9SroLXNZVbaVdr0xVYGeck5vJUn18xz%2BDV3LiLDlVtXlHY43L%2F0Qe3uLLP48YASacvxHmrR1mtrdt7RuA0tQ%2FT6VxMa8scJbjMtAtHL%2BaSkrZBAQl8VvU%2B1URllIrpXmja9gVlokWb%2BQLCSDi3P8Z4%2FAfw35kaVPTJRVXqe9C2T5aR84%2Bejs616G1bpuRhmR%2FXWTSgkQGAVwH0858n2Hi9I62j0E%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230216T034041Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASC2SUW4SBQWIIRBM%2F20230216%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=09fa0dd01110646b0597ebd56442ed63c88f9ddd67f121a820543330f8fb7af4",
      title: `${t("services.service8__title")}`,
      text: `${t("services.service8__text")}`,
    },
    {
      img: "https://wecan200.s3.us-east-1.amazonaws.com/website/Website%20Edits/two-rolls-melamine-edge-finishing-furniture-handmade-furniture-production-selective-focus.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIQDq%2BOA32GvUEORzH8JNTS91hdTMS%2FBxT5SzzhrL7taP2wIgJ6mEKd3T9sKHuDTt3yBii8sWymh5gh%2FlTX2IUBhdyX0q5AIIPRAAGgwxNDM1MTc4NTc1NzIiDE0SZxn%2BS%2FwCj0fiKirBAg5NjK29yWbPxr8xWyAQsO9WMUzAYKO%2FDARGEFSCIQsIaQLethEBzfSPs9SQ%2BEGqaWWHbynfUK7AfKDfxklJCGoA4n7ZqfORFoRkBypjuJzmvv0T%2F6EkX4SumusLJsKkHILlwj19idb0PJTX%2FgFsuHeV3YwZxNdZvw%2FzzUiPpnP47eRAUX0ol1sibf1srYh2KBOoQhzsX6FhdBIsggGRz5WYxkPsaELyI85q8Q7uGIXiq9aPqVp6h3Q8orFqrhDZ4ruyVpjJOSaJGorgJ5T9vMWHMXEHTO3uWB%2FiD5YXZ3nQONdDVVFnQSgfFi6H9eiX9EVBPBA3CL7v2ekmyaOngLi5hV4Zk4kFPr1VLfaQNzD7Iga1lj078X0FRpuvD9ejZDCllyxYc4x3a959KX5FQwJnqYt9eljWJX0yMa4WoAkxSTDcyLafBjqzAujN4R7u473Fb7UFDwjpmaKquNZSDQDqYseBQLsiTN6txEpeg6EGekuEFoBvpUIcU6Cb9YJlJOkFRf%2Bzll%2B1wrgccNr6TgHV%2FiEt4dmrQuV%2FwkQHnYoYN5a1RDlU6tHRPewimC2uLXkqNjGIUxozHm4ELG4uqe90YScy5PeP1065NCeoa6rkEZuPQq4WUVz9SroLXNZVbaVdr0xVYGeck5vJUn18xz%2BDV3LiLDlVtXlHY43L%2F0Qe3uLLP48YASacvxHmrR1mtrdt7RuA0tQ%2FT6VxMa8scJbjMtAtHL%2BaSkrZBAQl8VvU%2B1URllIrpXmja9gVlokWb%2BQLCSDi3P8Z4%2FAfw35kaVPTJRVXqe9C2T5aR84%2Bejs616G1bpuRhmR%2FXWTSgkQGAVwH0858n2Hi9I62j0E%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230216T034359Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASC2SUW4SBQWIIRBM%2F20230216%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=59232033d6ea838b5cd085b810cd5bd080258c77d71d9f8982d7c4e9d0680fd2",
      title: `${t("services.service9__title")}`,
      text: `${t("services.service9__text")}`,
    },
    {
      img: "https://wecan200.s3.us-east-1.amazonaws.com/website/Website%20Edits/closeup-shot-machine-with-numerical-control-cuts-wood-cnc-tool-woodworking-industry.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIQDq%2BOA32GvUEORzH8JNTS91hdTMS%2FBxT5SzzhrL7taP2wIgJ6mEKd3T9sKHuDTt3yBii8sWymh5gh%2FlTX2IUBhdyX0q5AIIPRAAGgwxNDM1MTc4NTc1NzIiDE0SZxn%2BS%2FwCj0fiKirBAg5NjK29yWbPxr8xWyAQsO9WMUzAYKO%2FDARGEFSCIQsIaQLethEBzfSPs9SQ%2BEGqaWWHbynfUK7AfKDfxklJCGoA4n7ZqfORFoRkBypjuJzmvv0T%2F6EkX4SumusLJsKkHILlwj19idb0PJTX%2FgFsuHeV3YwZxNdZvw%2FzzUiPpnP47eRAUX0ol1sibf1srYh2KBOoQhzsX6FhdBIsggGRz5WYxkPsaELyI85q8Q7uGIXiq9aPqVp6h3Q8orFqrhDZ4ruyVpjJOSaJGorgJ5T9vMWHMXEHTO3uWB%2FiD5YXZ3nQONdDVVFnQSgfFi6H9eiX9EVBPBA3CL7v2ekmyaOngLi5hV4Zk4kFPr1VLfaQNzD7Iga1lj078X0FRpuvD9ejZDCllyxYc4x3a959KX5FQwJnqYt9eljWJX0yMa4WoAkxSTDcyLafBjqzAujN4R7u473Fb7UFDwjpmaKquNZSDQDqYseBQLsiTN6txEpeg6EGekuEFoBvpUIcU6Cb9YJlJOkFRf%2Bzll%2B1wrgccNr6TgHV%2FiEt4dmrQuV%2FwkQHnYoYN5a1RDlU6tHRPewimC2uLXkqNjGIUxozHm4ELG4uqe90YScy5PeP1065NCeoa6rkEZuPQq4WUVz9SroLXNZVbaVdr0xVYGeck5vJUn18xz%2BDV3LiLDlVtXlHY43L%2F0Qe3uLLP48YASacvxHmrR1mtrdt7RuA0tQ%2FT6VxMa8scJbjMtAtHL%2BaSkrZBAQl8VvU%2B1URllIrpXmja9gVlokWb%2BQLCSDi3P8Z4%2FAfw35kaVPTJRVXqe9C2T5aR84%2Bejs616G1bpuRhmR%2FXWTSgkQGAVwH0858n2Hi9I62j0E%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230216T033640Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASC2SUW4SBQWIIRBM%2F20230216%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ac7abfb6f6fbcfc8ed59eebbb9ee445bc3c402d7d31a6c1d75a1f06582e2797c",
      title: `${t("services.service10__title")}`,
      text: `${t("services.service10__text")}`,
    },
    {
      img: "https://wecan200.s3.us-east-1.amazonaws.com/website/Website%20Edits/laser-engraving-cutting-woman-holding-example-cut-out-wooden-heart.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIQDq%2BOA32GvUEORzH8JNTS91hdTMS%2FBxT5SzzhrL7taP2wIgJ6mEKd3T9sKHuDTt3yBii8sWymh5gh%2FlTX2IUBhdyX0q5AIIPRAAGgwxNDM1MTc4NTc1NzIiDE0SZxn%2BS%2FwCj0fiKirBAg5NjK29yWbPxr8xWyAQsO9WMUzAYKO%2FDARGEFSCIQsIaQLethEBzfSPs9SQ%2BEGqaWWHbynfUK7AfKDfxklJCGoA4n7ZqfORFoRkBypjuJzmvv0T%2F6EkX4SumusLJsKkHILlwj19idb0PJTX%2FgFsuHeV3YwZxNdZvw%2FzzUiPpnP47eRAUX0ol1sibf1srYh2KBOoQhzsX6FhdBIsggGRz5WYxkPsaELyI85q8Q7uGIXiq9aPqVp6h3Q8orFqrhDZ4ruyVpjJOSaJGorgJ5T9vMWHMXEHTO3uWB%2FiD5YXZ3nQONdDVVFnQSgfFi6H9eiX9EVBPBA3CL7v2ekmyaOngLi5hV4Zk4kFPr1VLfaQNzD7Iga1lj078X0FRpuvD9ejZDCllyxYc4x3a959KX5FQwJnqYt9eljWJX0yMa4WoAkxSTDcyLafBjqzAujN4R7u473Fb7UFDwjpmaKquNZSDQDqYseBQLsiTN6txEpeg6EGekuEFoBvpUIcU6Cb9YJlJOkFRf%2Bzll%2B1wrgccNr6TgHV%2FiEt4dmrQuV%2FwkQHnYoYN5a1RDlU6tHRPewimC2uLXkqNjGIUxozHm4ELG4uqe90YScy5PeP1065NCeoa6rkEZuPQq4WUVz9SroLXNZVbaVdr0xVYGeck5vJUn18xz%2BDV3LiLDlVtXlHY43L%2F0Qe3uLLP48YASacvxHmrR1mtrdt7RuA0tQ%2FT6VxMa8scJbjMtAtHL%2BaSkrZBAQl8VvU%2B1URllIrpXmja9gVlokWb%2BQLCSDi3P8Z4%2FAfw35kaVPTJRVXqe9C2T5aR84%2Bejs616G1bpuRhmR%2FXWTSgkQGAVwH0858n2Hi9I62j0E%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230216T034739Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASC2SUW4SBQWIIRBM%2F20230216%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ff2f8527336ca9469d4123abbd7e07d3e3673a21f6bf7f42763220fbcc4c457b",
      title: `${t("services.service11__title")}`,
      text: `${t("services.service11__text")}`,
    },
  ];

  return (
    <>
      {/* <Header /> */}
      <div className="services__page">
        <div className="container">
          <h2 className="section__title">{t("Our_Services")}</h2>
          <div className="sevices__list">
            {services.map((service, i) => (
              <ServicesBlock
                key={i}
                title={service.title}
                text={service.text}
                img={service.img}
                id={`service_${i + 1}`}
                selectedService={selectedService}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ServicesPage;
