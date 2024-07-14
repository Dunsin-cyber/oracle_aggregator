import { useAccount, useReadContract } from "wagmi";
import contractAbi from "../pyth/ABI/abi.json";

const contractAddress = "0x9EFb119c507CEa769b4277D6eC42274096579ce9";

type ReturnType = {
  isLoading: boolean;
  data: any;
  error: any;
};

export const useGetChainLinkBTCPrice = (): ReturnType => {
  const { data, error } = useReadContract({
    abi: contractAbi,
    address: contractAddress,
    functionName: "getLatestChainlinkBTCPrice",
    // args: [id],
  });

  return {
    isLoading: !data && !error,
    data,
    error,
  };
};

export const useGetLatestChainlinkETHPrice = (): ReturnType => {
  const { data, error } = useReadContract({
    abi: contractAbi,
    address: contractAddress,
    functionName: "getLatestChainlinkETHPrice",
    // args: [id],
  });

  return {
    isLoading: !data && !error,
    data,
    error,
  };
};

export const useGetLatestBTCPrice = (updateData: any): ReturnType => {
  const { data, error } = useReadContract({
    abi: contractAbi,
    address: contractAddress,
    functionName: "getLatestBTCPrice",
    args: [updateData],
  });

  return {
    isLoading: !data && !error,
    data,
    error,
  };
};

export const useGLatestETHPrice = (updateData: any): ReturnType => {
  const { data, error } = useReadContract({
    abi: contractAbi,
    address: contractAddress,
    functionName: "getLatestETHPrice",
    args: [updateData],
  });

  return {
    isLoading: !data && !error,
    data,
    error,
  };
};

export const useGetLatestBNBPrice = (updateData: any): ReturnType => {
  const { data, error } = useReadContract({
    abi: contractAbi,
    address: contractAddress,
    functionName: "getLatestBNBPrice",
    args: [updateData],
  });

  return {
    isLoading: !data && !error,
    data,
    error,
  };
};
