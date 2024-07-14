import { useAccount, useReadContract } from "wagmi";
import contractAbi from "../pyth/ABI/abi.json";

const contractAddress = "0x9EFb119c507CEa769b4277D6eC42274096579ce9";

type ReturnType = {
  isLoading: boolean;
  data: any;
  error: any;
};

export const useGetChainLinkPrice = (id: number): ReturnType => {
  const { data, error } = useReadContract({
    abi: contractAbi,
    address: contractAddress,
    functionName: "getLatestChainlinkPrice",
    // args: [id],
  });

  return {
    isLoading: !data && !error,
    data,
    error,
  };
};
